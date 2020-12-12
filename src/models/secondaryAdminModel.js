const {Schema, model} = require('mongoose')

const SecondaryAdminSchema = new Schema({
    firstname: {
        type: String, 
        required: true
    }, 
    othernames: {
        type: String, 
        required: true
    }, 
    email: {
        type: String, 
        required: true
    }, 
    phone: {
        type: Number, 
        required: true
    }, 
    delete: {
        type: Boolean, 
        default: false
    }, 
    permission: {
        type: Boolean, 
        default: false
    }, 
    password: {
        type: String, 
        required: true
    }, 
}, {timestamps: true})

const SecondaryAdminModel = model('secondaryadmin', SecondaryAdminSchema)

module.exports = {SecondaryAdminModel}