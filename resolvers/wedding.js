const Wedding = require('../models/wedding'); 
const checkAuth = require('../utils/checkAuth')

module.exports = {
    Mutation : {
        addWedding: async(parent, 
            {weddingdetails: {brideName, groomName, venue, date, createdAt, updatedAt, user}}, 
            context) =>
            {
                const User = checkAuth(context)
            }   
    }
}