const {gql} = require('apollo-server')

const typeDefs = gql ` 

    type User {
        id: ID!, 
        firstname: String!, 
        lastname: String!, 
        email: String!, 
        token: String!, 
        date: String!
    }
    
    type Wedding{
       id: ID!, 
       brideName: String! 
       groomName: String!, 
       venue: String!, 
       date: String!, 
       createdAt: String!, 
       updatedAt: String!, 
       user: ID!,
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

    input WeddingDetails {
        brideName: String!, 
        groomName: String!, 
        venue: String!, 
        date: String!,       
        user: ID!,
    }

    type Query {
        sayHi: String,
        getUsers: [User],
        getUserbyId (id: ID!): User!, 
    }, 

    type Mutation {
        register(registerInput: RegisterInput): User!, 
        login(loginInput: LoginInput): User!,    
        addWedding(weddingdetails: WeddingDetails): Wedding!,  
    }

`

module.exports = {
    typeDefs
}