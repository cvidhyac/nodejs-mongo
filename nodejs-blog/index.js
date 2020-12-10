const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
const {engine } = require('express-edge')

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const storePostController = require('./controllers/storePost')
const contactController = require('./controllers/contactPost')
const findPostController = require('./controllers/findPost')
const aboutController = require('./controllers/aboutPost')

// Automatically sets view engine and adds dot notation to app.render
app.use(engine)

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