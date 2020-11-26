const mongoose = require('mongoose')
const Post = require('./Post')

// connect to mongo
mongoose.connect('mongodb://localhost/nodejs-blog', {useNewUrlParser: true, useUnifiedTopology: true})

exports.create_new_post = function(request_body) {
    Post.create(request_body, (err, success) => {
        if(err) {
            handleError(err)
        }
        else {
            console.log('Save success!')
        }
    })
}
