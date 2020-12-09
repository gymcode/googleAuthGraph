const {ApolloServer, gql} = require('apollo-server'); 
const mongoose = require('mongoose')
const dotenv = require('dotenv'); 

dotenv.config()

const PORT = process.env.PORT || 5000

// imports 
const { resolvers } = require('./src/graphql/resolvers/index')
const typeDefs = require('./src/graphql/typeDefs')

const server = new ApolloServer(
    {
        typeDefs,         
        resolvers, 
        context : ({req})=>({req})
    }
);

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log("Database connection established successfuly")
            return server.listen({port: PORT})
        })
        .then(({url})=> console.log(`server connection established successfully on url ${url}`))

//models
require('./src/models/registerModel');
require('./src/models/wedding');
