const {gql} = require('apollo-server')

const typeDefs = gql `

    type User{
        id: ID!, 
        firstname: String!, 
        lastname: String!, 
        email: String!, 
        token: String!, 
        createdAt: String!     
    }

    input RegisterInput {
        firstname: String!, 
        lastname: String!,
        username: String!, 
        password: String!, 
        confirmPassword: String
    }

    type Query {
        sayHi: String
    }, 

    type Mutation {
        register(registeInput: RegisterInput): User!
    }
`

module.exports = {
    typeDefs
}