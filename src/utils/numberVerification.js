var client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
const {AuthenticationError} = require('apollo-server')

module.exports = {
    sendVerification: (phone)=>{
         return client.verify.services(process.env.ACCOUNT_SID)
            .verifications
            .create({to: phone, channel: process.env.CHANNEL})
    }, 

    checkToken: ({phone}, context)=>{ 
        //getting the header from the global req
        const adminCode = context.req.headers.code; 

        console.log(adminCode)
        if (adminCode) {
           try {
               const codeine =  client.verify.services(process.env.ACCOUNT_SID)
                            .verificationChecks
                            .create({to: phone, code})
                            .then(veri => console.log(veri.status))
                return codeine;
           } catch (error) {
               throw new AuthenticationError("invalid code")
           }
        } 
        throw new Error("must make sure a verification code has been entered")
    }   
}