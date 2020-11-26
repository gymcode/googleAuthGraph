// combining all the resolvers
const registerResolvers = require('./register.js')
const LoginResolvers = require('./login.js')
const UserResolvers = require('./user.js')

const resolvers = {
    Query: {
        ...registerResolvers.Query, 
        ...UserResolvers.Query
    },

    Mutation: {
        ...registerResolvers.Mutation, 
        ...LoginResolvers.Mutation
    }
}

module.exports = {
    resolvers
}