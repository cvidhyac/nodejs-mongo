const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
const { config, engine } = require('express-edge')
const fileUpload = require('express-fileupload')
const body_parser = require('body-parser')
const post_dao = require('./database/post-dao')
const user_dao = require('./database/user-dao')
const Post = require('./database/Post')

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

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const contactController = require('./controllers/contactPost')
const createUserController = require('./controllers/createUser')

app.get('/', homePageController)
app.get('/about', aboutMiddleware)
app.get('/new',createPostController)
app.get('/auth/register', createUserController)
app.get('/contact', contactController)

app.get('/posts/:id', async(req, res) => {

    const post = await post_dao.find_post(req.params.id)
    res.render('posts', {
        post
    })
})

app.post('/posts/store', (req, res) => {
        post_dao.create_new_post(req.body)
        res.redirect('/')
})

app.post('/user/register', (req, res) => {
    user_dao.create_user(req.body)
    console.log(JSON.stringify(req.body))
    res.redirect('/')
})


app.listen(3000, () => {
    console.log('Blog listening at port ')
})