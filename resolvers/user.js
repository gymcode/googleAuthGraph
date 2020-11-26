const User = require('../models/registerModel')
const CheckAuth = require('../utils/checkAuth.js')

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
    }
}