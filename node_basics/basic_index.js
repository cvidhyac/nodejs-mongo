const http =  require('http')

const server = http.createServer((request, response) => {
    console.log(request.url)
    
    if(request.url === '/') {
        response.end('The Home Page')
    }
    else if(request.url === '/about') {
        return response.end('The About page')
    } else if(request.url == '/contact') {
        return response.end('The Contact Page')
    } else {
        return response.writeHead('404', "Cannot find the page")
    }
}) 

server.listen(3000)