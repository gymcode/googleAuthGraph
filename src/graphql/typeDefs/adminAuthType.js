const {gql} = require('apollo-server')

const Admin = gql `

    type MainAdmin{
        _id: String!, 
        firstname: String!, 
        othernames: String!, 
        email: String!, 
        createdAt: Date!, 
        updatedAt: Date!
    }

    type SecondaryAdmins {
        _id: String!, 
        firstname: String!, 
        othernames: String!, 
        email: String!, 
        phone: String!, 
        delete: Boolean!, 
        permission: Boolean!, 
        createdAt: Date, 
        updatedAt: Date
    }

    input AddMainAdmin {
        firstname: String!,   
        othernames: String, 
        email: String!, 
        
    } 
`
