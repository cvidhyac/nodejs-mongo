const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
const { config, engine } = require('express-edge')
const fileUpload = require('express-fileupload')
const body_parser = require('body-parser')
const post_dao = require('./database/post-dao')
const Post = require('./database/Post');

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.use(fileUpload())
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended : true}))
const aboutMiddleware = (req, res, next) => {
    console.log('About middleware is printed, start rendering')
    next()
}
app.use('/about', aboutMiddleware)
app.set('views', `${__dirname}/views`);


app.get('/', async(req, res) => {

    // await until posts are found
    const posts = await Post.find({})
    console.log(posts)

    res.render('index', {
        posts
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/posts/:id', async(req, res) => {

    const post = await post_dao.find_post(req.params.id)
    res.render('posts', {
        post
    })
})

app.get('/new', (req, res) => {
    res.render('create')
})

app.post('/posts/store', (req, res) => {
    const {image} = req.files
    image.mv(path.resolve(__dirname, '/public/posts', image.name), (error, success) => {
        post_dao.create_new_post(req.body)
        res.redirect('/');
    });
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(3000, () => {
    console.log('Blog listening at port ')
})