const  MainAdmin = require('../../models/AdminModel'); 
const SecAdmin = require('../../models/secondaryAdminModel'); 


module.exports = {
    Mutation: {
        addMainAdmin: async (_, {input: {firstname, othernames, email, password}})=>{
            
        }
    }
}
