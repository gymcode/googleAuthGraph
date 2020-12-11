const {model, Schema} = require('mongoose')

const MainAdminModel = new Schema({
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
}, {timestamps: true})