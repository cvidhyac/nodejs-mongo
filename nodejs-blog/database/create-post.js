const mongoose = require('mongoose')
const Post = require('./Post')

// connect to mongo
mongoose.connect('mongodb://localhost/nodejs-blog', {useNewUrlParser: true, useUnifiedTopology: true})

exports.create_new_post = function(request_body) {
    Post.create(request_body, (err, success) => {
        if(err) {
            console.log(err)
        }
        else {
            console.log('Save success!')
        }
    })
}

exports.find_post = function(id) {

    //validate if id is a valid mongoose id
    if(mongoose.Types.ObjectId.isValid(id)) {
        return Post.findById(id)
    } else {
        console.log('Invalid mongo object id, received :' + id)
    }

}
