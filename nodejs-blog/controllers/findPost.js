const post_dao = require('../database/post-dao')

module.exports = async(req, res) => {

    const post = await post_dao.find_post(req.params.id)
    res.render('posts', {
        post
    })
}