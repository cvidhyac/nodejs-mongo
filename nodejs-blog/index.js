const express = require('express')
const expressEdge = require('express-edge')
const path = require('path')

const app = express()
app.use(express.static('public'))
const { config, engine } = require('express-edge');
 
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
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

app.listen(3000, () => {
    console.log('Blog listening at port ')
})