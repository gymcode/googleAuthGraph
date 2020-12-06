const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    TokenGen: ()=>{
        const token = jwt.sign({
            
        })
    }
}