const User = require('../models/registerModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {UserInputError} = require('apollo-server')

const {SECRET_KEY} = require('../config')

module.exports = {
    Mutation: {
        login: async(parent, {loginInput: {email, password}})=>{
            console.log("dsdasdkadasda")
            // making sure all fields are not empty
            // checking if the email already exists
            const emailCheck = await User.findOne({email}); 
            console.log(emailCheck)
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