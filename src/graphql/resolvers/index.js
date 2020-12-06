// combining all the resolvers
const UserResolvers = require('./User')
const WeddingMutation = require('./Wedding')

const resolvers = {
    Query: {
        ...UserResolvers.Query
    },

    Mutation: {
        ...UserResolvers.Mutation,
        ...WeddingMutation.Mutation
    }
}

module.exports = {
    resolvers
}