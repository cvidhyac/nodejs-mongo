const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    if(req.url === '/') {
        return res.end(fs.readFileSync('index.html'))
    } else if(req.url === '/about') {
        return res.end(fs.readFileSync('about.html'))
    } else if(req.url === '/contact') {
        return res.end(fs.readFileSync('contact.html'))
    } else {
        return res.writeHead(404)
    }
})

server.listen(3001)

fs.lstat