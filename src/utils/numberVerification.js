var client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const {AuthenticationError} = require('apollo-server')

module.exports = {
    sendVerification: (phone)=>{
         return client.verify.services(process.env.ACCOUNT_SID)
            .verifications
            .create({to: phone, channel: process.env.CHANNEL})
            .then(verification => console.log(verification))
    }, 

    checkToken: (context)=>{ 
        //getting the header from the global req
        var adminNumber = context.req.headers.phone;
        var adminCode = context.req.headers.code; 

        if (adminCode) {
            if (adminNumber) {
                try {
                    const codeine =  client.verify.services(process.env.ACCOUNT_SID)
                                 .verificationChecks
                                 .create({to: adminNumber, code: adminCode})
                                 .then(veri => console.log(veri.status))
                     return codeine;
                } catch (error) {
                    throw new AuthenticationError("invalid code")
                }
            }
            throw new Error("a phone number must be inserted ")
        } 
        throw new Error("must make sure a verification code has been entered")
    }   
} 