const Post = require('../database/Post')

module.exports = async(req, res) => {

    // await until posts are found
    const posts = await Post.find({})
    console.log(req.session)
    res.render('index', {
        posts
    })
}