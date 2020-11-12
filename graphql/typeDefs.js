const {gql} = require('apollo-server')

const typeDefs = gql ` 

    type User {
        id: ID!, 
        firstname: String!, 
        lastname: String!, 
        email: String!, 
        token: String!, 
    }

    input RegisterInput {
        firstname: String!, 
        lastname: String!, 
        username: String!, 
        password: String!, 
    }

    type Query {
        sayHi: String
    }, 

    type Mutation {
        register(registerInput: RegisterInput): User
    }

`

module.exports = {
    typeDefs
}