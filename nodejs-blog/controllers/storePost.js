const path = require('path')
const post_dao = require('../database/post-dao')

module.exports = (req, res) => {
    const {image} = req.files
    image.mv(path.resolve(__dirname, '../public/posts', image.name), (error, success) => {
    post_dao.create_new_post(req.body)
    res.redirect('/')
    })
}