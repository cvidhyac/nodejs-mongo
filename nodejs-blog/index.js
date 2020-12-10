const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
const { config, engine } = require('express-edge')
const fileUpload = require('express-fileupload')
const body_parser = require('body-parser')
const post_dao = require('./database/post-dao')
const Post = require('./database/Post')

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const contactController = require('./controllers/contactPost')
const findPostController = require('./controllers/findPost')
const aboutController = require('./controllers/aboutPost')

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


app.get('/', homePageController)
app.get('/about', aboutController)
app.get('/posts/:id', findPostController)
app.get('/new', createPostController)
app.post('/posts/store', storePostController)
app.get('/contact', contactController)


app.listen(3000, () => {
    console.log('Blog listening at port ')
})