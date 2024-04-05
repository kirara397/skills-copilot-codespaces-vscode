// Create web server
// Run with node

var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    var url_parts = url.parse(request.url);
    var path = url_parts.pathname;

    switch(path) {
        case '/':
            fs.readFile('./index.html', function(error, data) {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            });
            break;
        case '/comments':
            fs.readFile('./comments.json', function(error, data) {
                response.writeHead(200, {'Content-Type': 'application/json'});
                response.end(data);
            });
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('Not Found');
            break;
    }
});

server.listen(3000);
console.log('Server is running at http://localhost:3000');