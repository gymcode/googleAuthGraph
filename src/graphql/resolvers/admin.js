const  MainAdmin = require('../../models/AdminModel'); 
const SecAdmin = require('../../models/secondaryAdminModel'); 


module.exports = {
    Mutation: {
        addMainAdmin: async (_, {input: {firstname, othernames, email, password}})=>{
            // TODO input validation
            // TODO password hashing 
            // TODO check if there is a user in it already 
            // TODO if yes then cannot add onother super user
        }
    }
}
