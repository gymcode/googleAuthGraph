const {gql} = require('apollo-server')

const wedding = gql `
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

    input WeddingDetails {
        brideName: String!, 
        groomName: String!, 
        venue: String!, 
        date: String!,       
    }

    extend type Mutation {
        addWedding(weddingdetails: WeddingDetails): Wedding!,  
    }
`

module.exports = wedding
