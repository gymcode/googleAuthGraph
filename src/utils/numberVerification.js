var client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

module.exports = {
    sendVerification: (phone)=>{
         client.verify.services(process.env.ACCOUNT_SID)
            .verifications
            .create({to: phone, channel: process.env.CHANNEL})
            .then(verification => {})
    }
}