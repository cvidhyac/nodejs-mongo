const express = require('express')
const path = require('path')
const { config, engine } = require('express-edge')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const body_parser = require('body-parser')
const post_dao = require('./database/post-dao')
const user_dao = require('./database/user-dao')
const mongoose = require('mongoose')

const app = express()
app.use(express.static('public'))
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

// connect to mongo
mongoose.connect('mongodb://localhost/nodejs-blog', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
const mongostore = connectMongo(expressSession)
//express sessions for login
app.use(expressSession({
    secret: 'secret',
    store: new mongostore({
        mongooseConnection: mongoose.connection
    })
}))
app.set('views', `${__dirname}/views`);

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const contactController = require('./controllers/contactPost')
const findPostController = require('./controllers/findPost')
const aboutController = require('./controllers/aboutPost')
const createUserController = require('./controllers/createUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')

app.get('/', homePageController)
app.get('/about', aboutController)
app.get('/new',createPostController)
app.get('/auth/register', createUserController)
app.get('/contact', contactController)
app.get('/posts/:id', findPostController)
app.get('/auth/login', loginController)

app.post('/posts/store', (req, res) => {
        post_dao.create_new_post(req.body)
        res.redirect('/')
})

app.post('/user/register', (req, res) => {
    user_dao.create_user(req.body)
    res.redirect('/')
})

app.post('/user/login', loginUserController)

app.listen(3000, () => {
    console.log('Blog listening at port ')
})