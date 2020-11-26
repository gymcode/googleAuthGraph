const User = require('../models/registerModel')

module.exports = {
    Query: {
        getUsers : async()=>{
            try {
                const user = await User.find()
                return user;
            } catch (error) {
                throw new Error("the database is giving issues")
            }
        }
    }
}