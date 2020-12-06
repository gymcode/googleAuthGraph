const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
dotenv.config()

module.exports = (context)=>{
        //getting the header from the global req
        const authHeader = context.req.headers.authorization;
        if (authHeader) {
            // spliting the auth bearer from the token 
            const token = authHeader.split('Bearer ')[1];

            if (token) {
                try {
                    // getting the token 
                    const user = jwt.verify(token, process.env.SECRET_KEY)
                    return user;
                } catch (error) {
                    throw new AuthenticationError("invalid token")
                }
            }
            throw new Error ('Auth token must be \'Bearer [token\' ')
        }   
        throw new Error('Auth token must be provided'); 

}