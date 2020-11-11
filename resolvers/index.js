// combining all the resolvers
const registerResolvers = require('./register.js')

const resolvers = {
    Query: {
        ...registerResolvers.Query
    }
}

module.exports = {
    resolvers
}