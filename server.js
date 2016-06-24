var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    fs.readFile('public/index.html',function (error, data) {
    response.writeHead(302, {
        'Location' : 'http://naver.com'
    });
    response.end();    
    });
}).listen(52273);
console.log('HTML Server is NOW Running');
