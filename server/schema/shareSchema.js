const mongoose = require('mongoose')
const share=mongoose.Schema({
    title: String,
    thumbnail: String,
    description: String,
    type: String
})

module.exports = mongoose.model('addStory',share)