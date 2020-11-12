const User = require('../models/registerModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const { UserInputError } = require('apollo-server');

const {SECRET_KEY} = require('../config.js')

module.exports = {
    Query: {
        sayHi: ()=>{
            return "this is me"
        }
    },

    Mutation: {
        register: async (parent, { registerInput: {firstname, lastname, username, password} }) => {
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
                console.log(savedUser)
                console.log(parent)

                // jwt token 
                const token = jwt.sign({
                    id: savedUser.id, 
                    email: savedUser.email,     
                    lastname: savedUser.lastname
                }, SECRET_KEY, {expiresIn: '1h'})

                console.log(token)

                return {
                    id: savedUser._id, 
                    firstname, 
                    lastname,
                    email,
                    token
                }
            } catch (error) {
                return {
                    message: error
                }
            }


        }
    }
}