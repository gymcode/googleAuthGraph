const  {MainAdminModel} = require('../../models/AdminModel'); 
const SecAdmin = require('../../models/secondaryAdminModel'); 
const {MainAdminValidation} = require('../../utils/validator')
const {UserInputError} = require('apollo-server')
const bcrypt = require('bcryptjs')

module.exports = {
    Mutation: {
        addMainAdmin: async (_, {input: {firstname, othernames, email, password}})=>{
            // TODO input validation
            const {errors, valid} = MainAdminValidation(firstname, othernames, email, password)
            if (!valid) {
                throw new UserInputError('error', {errors})
            }
            // TODO check if there is a user in it already 
            const userCheck = await MainAdminModel.find({email})
            if (userCheck) {
                return {
                    status: "User already exist no more can be added"
                }
            }
            // TODO password hashing 
            const SaltGen = await bcrypt.genSalt(12); 
            const hashedPassword = await bcrypt.hash(password, SaltGen)

            const newUser = MainAdminModel 

            // TODO if yes then cannot add onother super user
        }
    }
}
