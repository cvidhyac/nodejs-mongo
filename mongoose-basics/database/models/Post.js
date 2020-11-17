const mongoose = require('mongoose')

// Users collection, Post collection, Products Collection

const postSchema = new mongoose.Schema({
    title : String,
    description: String,
    content: String
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post