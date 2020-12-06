const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    TokenGen: (user)=>{
        return jwt.sign({
            id: user._id, 
            email: user.email
        }, process.env.SECRET_KEY, {expiresIn: "1h"})
    }, 

    TokenVerification: (token)=>{
        return jwt.verify(token, process.env.SECRET_KEY)
    }
}

