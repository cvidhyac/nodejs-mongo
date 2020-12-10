const path = require('path')
const { isNullOrUndefined } = require('util')
const post_dao = require('../database/post-dao')

module.exports = (req, res) => {
    const {image} = req.files
    if(image !== null || image !== 'undefined') {
        image.mv(path.resolve(__dirname, '../public/posts', image.name), (error, success) => {
            post_dao.create_new_post(req.body)
            res.redirect('/')
        })
    } else {
        console.log('image null, post not created')
        res.redirect('/')
    }

}