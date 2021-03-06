const Post = require('../database/Post')

module.exports = async(req, res) => {

    // await until posts are found
    const posts = await Post.find({}).populate('user_id')
    console.log(posts)
    res.render('index', {
        posts
    })
}