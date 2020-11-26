const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,
    description : String,
    content : String
})

const Post = mongoose.model('Post', schema)

module.exports = Post