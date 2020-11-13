const { request, response } = require("express");

const express = require('express')

const app = express()
app.get('/', (request, response) => {
    response.json({
        name : 'Hello World'
    })
})

app.get('/about', (request, response) => {
    response.send({
        name: 'Hello World'
    })
})

app.get('/contact', (request, response) => {
    response.send({
        contact: 'John Doe'
    })
})

app.listen(3001, () => {
    console.log('App listening on port 3000')
})
