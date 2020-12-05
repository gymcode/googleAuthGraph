const mongoose = require('mongoose'); 
const Schema =  mongoose.Schema

const WeddingSchema = new Schema({
    brideName: {
        type: String, 
        min: 3, 
        max: 255,
    },
    groomName: {
        type: String, 
        min: 3, 
        max: 255,
    }, 
    venue: {
        type: String, 
        min: 3, 
        max: 255,
    }, 
    date: Date, 
    createdAt: {
        type: Date, 
        default: Date.now()
    },
    updatedAt: {
        type: Date, 
        default: Date.now(),
    }, 
    user: Schema.Types.ObjectId
     



})