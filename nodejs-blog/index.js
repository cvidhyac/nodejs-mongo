const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))
const { config, engine } = require('express-edge');
const body_parser = require('body-parser')
const create_post = require('./database/create-post')

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended : true}))
app.set('views', `${__dirname}/views`);


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/posts', (req, res) => {
    res.render('posts')
})

app.get('/posts/new', (req, res) => {
    res.render('create')
})

app.post('/posts/store', (req, res) => {
    create_post.create_new_post(req.body)
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('Blog listening at port ')
})