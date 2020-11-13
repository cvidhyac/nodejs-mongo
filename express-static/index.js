const { response } = require('express')
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3003, () => {
    console.log('App listening at port 3003')
})
