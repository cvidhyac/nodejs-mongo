const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,
    description: {
        type: String,
        default: 'No description provided'
    },
    content: String,
    username: {
        type: String,
        default: 'blogger'
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', schema)

module.exports = Post