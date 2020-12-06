const {gql} = require('apollo-server')

const users = gql `
    type User {
        _id: ID!, 
        firstname: String!, 
        lastname: String!, 
        email: String!, 
        token: String!, 
        date: String!
    }

    input RegisterInput {
        firstname: String!, 
        lastname: String!, 
        username: String!, 
        password: String!, 
    }

    input LoginInput {
        email: String!, 
        password: String!,
    }

    extend type Query {
        sayHi: String,
        getUsers: [User],
        getUserbyId (id: ID!): User!, 
    }, 

    extend type Mutation {
        register(registerInput: RegisterInput): User!, 
        login(loginInput: LoginInput): User!,    
    }
`

module.exports = users
