// combining all the resolvers
const UserResolvers = require('./user.js')
const WeddingMutation = require('./wedding.js')
const AdminResolvers = require('./admin.js')

const resolvers = {
    Query: {
        ...UserResolvers.Query
    },

    Mutation: {
        ...UserResolvers.Mutation,
        ...WeddingMutation.Mutation, 
        ...AdminResolvers.Mutation
    }
}

module.exports = {
    resolvers
}