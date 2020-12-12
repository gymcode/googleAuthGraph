const  MainAdmin = require('../../models/AdminModel'); 
const SecAdmin = require('../../models/secondaryAdminModel'); 
const {MainAdminValidation} = require('../../utils/validator')
const {UserInputError} = require('apollo-server')


module.exports = {
    Mutation: {
        addMainAdmin: async (_, {input: {firstname, othernames, email, password}})=>{
            // TODO input validation
            const {errors, valid} = MainAdminValidation(firstname, othernames, email, password)
            if (!valid) {
                throw new UserInputError('error', {errors})
            }
            // TODO password hashing 
            // TODO check if there is a user in it already 
            // TODO if yes then cannot add onother super user
        }
    }
}
