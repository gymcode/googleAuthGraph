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
        password: String!, 
        confirmPassword: String!, 
    } 

    input addSecAdmin{
        firstname: String!, 
        othernames: String!, 
        email: String!, 
        phone: String!, 
        password: String!,
        confirmPassword: String!
    }

    input adminPhone {
        phone: String!, 
    }

    extend type Mutation {
        addMainAdmin(input: addMainAdmin): String!,
        addSecAdmin(input: addSecAdmin): String!,
        addMainAdminPhone(input: adminPhone): Boolean!,
    }
`

module.exports = Admin
