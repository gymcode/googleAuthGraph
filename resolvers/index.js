// combining all the resolvers
const registerResolvers = require('./register.js')
const LoginResolvers = require('./login.js')
const UserResolvers = require('./user.js')
const WeddingMutation = require('./wedding.js')

const resolvers = {
    Query: {
        ...registerResolvers.Query, 
        ...UserResolvers.Query
    },

    Mutation: {
        ...registerResolvers.Mutation, 
        ...LoginResolvers.Mutation, 
        ...WeddingMutation.Mutation
    }
}

module.exports = {
    resolvers
}