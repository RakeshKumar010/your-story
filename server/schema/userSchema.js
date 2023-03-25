const mongoose = require('mongoose')
module.exports = mongoose.model('userCollection', mongoose.Schema({
    name: String,
    number:Number,
    email: String,
    password:String
    
}))