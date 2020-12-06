const User = require('../../models/registerModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const {SECRET_KEY} = require('../../../config')

module.exports = {
    Query: {
        getUsers : async()=>{
            try {
                const user = await User.find()
                return user;
            } catch (error) {
                throw new Error("the database is giving issues")
            }
        }, 

        getUserbyId: async (parent, {id}, context)=>{
            try {
                const userbyId = await User.findById(id)
                return userbyId
            } catch (error) {
                throw new Error("the database dier fooling sooor")
            }
        }
    },

    Mutation: {
        // TODO registration
        userRegister: async (parent, { registerInput: {firstname, lastname, username, password} }) => {
            // validation for the inputs
            // making the username an email
            const DEFAULT_EMAIL = "@gmail.com"; 
            const email = username + DEFAULT_EMAIL;

            // checking is the username/email already exits in the database
            const existingUser = await User.findOne({email})
            if (existingUser) {
                throw new UserInputError("user already exist", {
                    error: "User already exist"
                })
            }
            // hashing the password
            const genSalt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(password, genSalt);

            // storing the details in the database
            const user = new User({
                firstname, 
                lastname, 
                email, 
                password: hashedPassword
            })

            //saving user in the database
            try {
                const savedUser = await user.save();

                // jwt token 
                const token = jwt.sign({
                    id: savedUser._id, 
                    email: savedUser.email,     
                    lastname: savedUser.lastname
                }, SECRET_KEY, {expiresIn: '1h'})

                console.log(savedUser)
                console.log(token)

                return {
                    ...savedUser._doc,
                    id: savedUser._id,
                    token
                }
            } catch (error) {
                return {
                    message: error
                }
            }


        },

        // TODO login 
        userLogin: async(parent, {loginInput: {email, password}})=>{
            // making sure all fields are not empty
            // checking if the email already exists
            const emailCheck = await User.findOne({email}); 
            if (!emailCheck) throw new UserInputError('email doesnot exist in the db', {
                error: "user doesnot exist"
            })

            // decrypting the passsword
            const passwordVerify = await bcrypt.compare(password, emailCheck.password); 
            if (!passwordVerify) throw new UserInputError('password is not in the database', {
                error: "incorrect password"
            })

            // providing a token for login
            const token = jwt.sign({
                id: emailCheck._id, 
                email: emailCheck.email
            }, SECRET_KEY, {expiresIn: "1h"})

            return {
                id: emailCheck._id,
                firstname: emailCheck.firstname, 
                lastname: emailCheck.lastname,
                email: emailCheck.email,
                date: emailCheck.date,
                token
            }


        }
    }
}