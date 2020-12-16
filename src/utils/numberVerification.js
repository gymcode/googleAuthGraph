var client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const {AuthenticationError} = require('apollo-server')

module.exports = {
    sendVerification: (phone)=>{
         return client.verify.services(process.env.ACCOUNT_SID)
            .verifications
            .create({to: phone, channel: process.env.CHANNEL})
    }, 

    checkToken: (phone, code, context)=>{
        //getting the header from the global req
        const adminCode = context.req.headers.authorization; 
        if (admincode) {
           try {
               const code =  client.verify.services(process.env.ACCOUNT_SID)
                            .verificationChecks
                            .create({to: phone, code: code})
                            .then(veri => console.log(veri.status))
                return code;
           } catch (error) {
               throw new AuthenticationError("invalid code")
           }
        } 
        throw new Error("must make sure a verification code has been entered")
    }   
}