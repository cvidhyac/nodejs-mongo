const mongoose = require('mongoose')
const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/nodejs-blog', {useNewUrlParser: true, useUnifiedTopology: true})

const dataToFind = Post.find({
    title: 'Save the world'
}, (error, success) => {
    if(error) {
        handleError(error)
    } else {
        console.log(success)
    }
})

console.log('Start execution for find By ID :=')

const findPost = Post.findById('5fb32c96307ec4516e048869', (error, success) => {
    if(error) {
        handleError(error)
    } else {
        console.log(success)
    }
})