const mongoose=require('mongoose')
const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/nodejs-blog', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const object = {
    title: 'My second blog post',
    description: 'Blog description is added here',
    content: 'Blog content is added here'
}

const updatedObject=Post.findByIdAndUpdate('5fb329cea80d07508a462ba9', object, (error, success) => {
    if(error) {
        throw error
    } else {
        console.log('Update successful')
    }
})