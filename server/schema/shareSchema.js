const mongoose = require('mongoose')
const share = mongoose.Schema({
    userid:String,
    title: String,
    thumbnail: String,
    description: String,
    type: String
})

module.exports = mongoose.model('addStory',share)