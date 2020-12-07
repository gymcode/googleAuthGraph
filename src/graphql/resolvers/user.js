const User = require('../../models/registerModel')
const bcrypt = require('bcryptjs')
const { UserInputError } = require('apollo-server');

const {TokenGen}  = require('../../utils/generateToken')
const {RegistrationValidation, LoginValidation} = require('../../utils/validator')

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
        userRegister: async (parent,{ registerInput: {firstname, lastname, username, password, confirmPassword} }) => {
            // validation for the inputs
            console.log("this is me")
            const {errors, valid} = RegistrationValidation(firstname, lastname, username, password, confirmPassword);
            console.log(valid)
            if (!valid) {
                throw new UserInputError('Errors', {errors})
            }
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
                const token = TokenGen(savedUser)               

                return {
                    id: savedUser._id,
                    ...savedUser._doc,
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
            const { errors, valid } = LoginValidation(email, password)
            if (!valid) {
                throw new UserInputError('Error', {errors})
            }

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
            const token = TokenGen(emailCheck)     

            return {
                id: emailCheck._id,
                ...emailCheck._doc,
                token
            }
        }
    }
}