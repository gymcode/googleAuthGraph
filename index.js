const {ApolloServer, gql, ApolloError} = require('apollo-server')

const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const typeDefs = gql `
    type Book {
        title: String, 
        author: String
    }

    type Query {
        books: [Book], 
        sayHi: String
    }

    

`

const resolvers = {
    Query: {

        sayHi: ()=>{
            console.log("hello")
        },

        books: ()=>{
            books
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.listen()
        .then(({url})=> console.log(`server connection established successfully on url ${url}`))