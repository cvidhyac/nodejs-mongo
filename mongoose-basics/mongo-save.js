const mongoose = require('mongoose')

// Import the model
const Post = require('./database/models/Post')

// connect to mongo
mongoose.connect('mongodb://localhost/nodejs-blog', {useNewUrlParser: true, useUnifiedTopology: true})

// mongodb create method
Post.create({
    title: 'My blog post',
    descrption: 'Blog description',
    content: 'Lorem ipsum'
}, (error, success) => {
    if(error) {
        handleError(error)
    } else {
        console.log(success)
    }
})

const blogPost = new Post({
    title: 'Save the world',
    description: 'Description for the blog',
    content: 'Write something here'
})

blogPost.save((error, success) => {
    if(error) {
        return handleError(error)
    } else {
        console.log(success)
    }
})

