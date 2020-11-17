const mongoose = require('mongoose')
const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/nodejs-blog', {useNewUrlParser: true, useUnifiedTopology: true})
//find By id and delete
const dataToDelete = Post.findByIdAndDelete('5fb32c96307ec4516e048869', (error, success) => {
    if(error) {
        handleError(error)
    } else {
        if(success===null) {
            console.log('record already deleted, none found')
        } else {
            console.log('Deletion successful')
        }

    }
})

