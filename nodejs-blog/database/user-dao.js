const mongoose = require('mongoose')
const User = require('./User')

// connect to mongo
mongoose.connect('mongodb://localhost/nodejs-blog', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})

exports.create_user = function(request_body) {
    User.create(request_body, (error, success) => {
        if(error) {
            console.log(error)
        } else {
            console.log('User Save successful')
        }
    })
}