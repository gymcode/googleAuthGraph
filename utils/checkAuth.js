const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken')
const {SECRET_KEY} = require('../config')

module.exports = (context)=>{
        //getting the header from the global req
        const authHeader = context.req.header.authorization;
        if (!authHeader) throw new Error('Auth token must be provided'); 

        // spliting the auth bearer from the token 
        const token = authHeader.split('Bearer ')[1];
        if (!token) throw new Error ('Auth token must be \'Bearer [token\' ')

        try {
            // getting the token 
            const user = jwt.verify(token, SECRET_KEY)
            return user;
        } catch (error) {
            throw new AuthenticationError("invalid token")
        }

}