const User = require('../models/registerModel')

module.exports = {
    Query: {
        sayHi: ()=>{
            return "this is me"
        }
    },

    Mutation: {
        register: async (parent, { registerInput: {firstname, lastname, username, password, confirmPassword} }, context, info) => {
           return {
               error: "console.log(firstname, lastname, username, password, confirmPassword)"
           }
        }
    }
}