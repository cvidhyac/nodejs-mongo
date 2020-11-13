const express = require('express')
const path = require('path')

const app = express()

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (request, response) => {
    response.sendFile(path.resolve(__dirname,'contact.html'))
})

app.listen(3002, () => {
    console.log('App listening on port 3002')
})