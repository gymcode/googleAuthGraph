const {model, Schema} = require('mongoose')

const MainAdminSchema = new Schema({
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
    password: {
        type: String, 
        required: true
    }, 
}, {timestamps: true});

const MainAdminModel = model('administrator', MainAdminSchema);

module.exports = {MainAdminModel}