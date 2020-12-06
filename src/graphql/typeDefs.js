const {gql} = require('apollo-server')
const Users = require('./typeDefs/userAuthType')
const Wedding = require('./typeDefs/weedingType')

const typeDefs = gql `
    type Query{
        root: String
    }

    type Mutation{
        root: String        
    }

    ${Users}
    ${Wedding}
`

module.exports = typeDefs