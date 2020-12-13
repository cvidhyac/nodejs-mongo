const post_dao = require('../database/post-dao')

module.exports = (req, res) => {
    post_dao.create_new_post(req.body)
    res.redirect('/')
}