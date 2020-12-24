const { response } = require('express')
const mongoose = require('mongoose')
const Post = require('./Post')

exports.create_new_post = function (req, res) {
    Post.create({
        ...req.body,
        user_id: req.session.userId
    }, (err, success) => {

        if (err) {
            console.log(err)
        }
        else {
            console.log('Save success!')
        }
    })
}

exports.find_post = function (id) {

    //validate if id is a valid mongoose id
    if (mongoose.Types.ObjectId.isValid(id)) {
        return Post.findById(id)
    } else {
        console.log('Invalid mongo object id, received :' + id)
    }

}
