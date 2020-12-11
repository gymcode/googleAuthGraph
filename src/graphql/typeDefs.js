const {gql} = require('apollo-server')
const Users = require('./typeDefs/userAuthType')
const Wedding = require('./typeDefs/weedingType')
const Admin = require('./typeDefs/adminAuthType')

const typeDefs = gql `
    scalar Date

    type Query{
        root: String
    }

    type Mutation{
        root: String        
    }

    ${Users}
    ${Wedding}
    ${Admin}
`

module.exports = typeDefs