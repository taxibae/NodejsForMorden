//module Initialize
var http = require('http');
var fs = require('fs');

//Run Web Server
http.createServer(function (request, response) {
    fs.readFile('public/index.html','utf8', function (error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
}).listen(52273,function(){
    console.log('server NOW RUNNING!');
});