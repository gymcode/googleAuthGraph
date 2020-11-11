const {ApolloServer, gql} = require('apollo-server'); 
const mongoose = require('mongoose')
const dotenv = require('dotenv'); 

dotenv.config()

// imports 
const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./resolvers/index')

const server = new ApolloServer({typeDefs, resolvers});

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("Database connection established successfuly")
            return server.listen()
        })
        .then(({url})=> console.log(`server connection established successfully on url ${url}`))

//models
require('./models/registerModel.js')
