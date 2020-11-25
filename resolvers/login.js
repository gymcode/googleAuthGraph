const User = require('../models/registerModel.js');
const bcrypt = require('bcryptjs');


module.exports = {
    Mutation: {
        login: async(parent, {loginInput: {email, password}})=>{
            
        }
    }
}