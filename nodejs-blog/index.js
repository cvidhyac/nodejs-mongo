require('dotenv').config();
const express = require('express')
const path = require('path')
const { config, engine } = require('express-edge')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const body_parser = require('body-parser')
const post_dao = require('./database/post-dao')
const user_dao = require('./database/user-dao')
const auth = require('./middleware/auth')
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')
const edge = require('edge.js')

const mongoose = require('mongoose')
const flash = require('connect-flash')
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
mongoose.connect(process.env.MONGO_CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
const mongostore = connectMongo(expressSession)
//express sessions for login
app.use(expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    resave: true,
    saveUninitialized: true,
    store: new mongostore({
        mongooseConnection: mongoose.connection
    })
}))
app.use(flash())
app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId)
    next()
})
app.set('views', `${__dirname}/views`);

const createPostController = require('./controllers/createPost')
const homePageController = require('./controllers/homePage')
const contactController = require('./controllers/contactPost')
const findPostController = require('./controllers/findPost')
const aboutController = require('./controllers/aboutPost')
const createUserController = require('./controllers/createUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

app.get('/', homePageController)
app.get('/about', aboutController)
app.get('/new', auth, createPostController)
app.get('/auth/register', createUserController)
app.get('/contact', contactController)
app.get('/posts/:id', findPostController)
app.get('/auth/login', redirectIfAuthenticated, loginController)

app.post('/posts/store', auth, (req, res) => {
        post_dao.create_new_post(req, res)
        res.redirect('/')
})

app.post('/user/register', redirectIfAuthenticated, (req, res) => {
    user_dao.create_user(req, res)
    // console.log(req.session.regErrors)
})

app.post('/user/login', redirectIfAuthenticated, loginUserController)

app.get('/auth/logout', auth, logoutController)

//Not found route looks like a middleware route, but this should be defined when none of the previous routes matched.
app.use((req, res) => {
    res.render('notfound')
})

app.listen(process.env.NODE_PORT, () => {
    console.log('Blog listening at port ' + process.env.NODE_PORT)
})