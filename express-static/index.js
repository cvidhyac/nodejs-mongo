const express = require('express')
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

app.get('/post', (req, res) => {
  res.render('post')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/post')
app.listen(3005, () => {
    console.log('App listening at port ')
})
