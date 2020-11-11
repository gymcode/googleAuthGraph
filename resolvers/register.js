const User = require('../models/registerModel')

module.exports = {
    Query: {
        sayHi: ()=>{
            return "this is me"
        }
    },

    Mutation: {
        register(parent, { registerInput: {firstname, lastname, username, password, confirmPassword}}, context, info) {

        }
    }
}