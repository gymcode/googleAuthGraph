const {gql} = require('apollo-server')

const Admin = gql `

    type MainAdmin{
        _id: String!, 
        firstname: String!, 
        othernames: String!, 
        email: String!, 
        createdAt: Date, 
        updatedAt: Date
    }

    type SecondaryAdmins {
        _id: String!, 
        firstname: String!, 
        othernames: String!, 
        email: String!, 
        phone: String!, 
        delete: Boolean, 
        createdAt: Date, 
        updatedAt: Date
    }

    input addMainAdmin {
        firstname: String!,   
        othernames: String, 
        email: String!,   
    } 

    input addSecAdmin{
        firstname: String!, 
        othernames: String!, 
        email: String!, 
        phone: String!, 
    }

    extend type Mutation {
        addMainAdmin(input: addMainAdmin): String!,
        addSecAdmin(input: addSecAdmin): String!,
    }
`

module.exports = Admin
