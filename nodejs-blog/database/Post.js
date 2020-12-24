const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,
    subtitle: {
        type: String,
        default: 'No description provided'
    },
    content: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', schema)

module.exports = Post