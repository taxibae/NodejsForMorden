var jade = require('jade');
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    //reading jadePage.jade
    fs.readFile('jadePage_2.jade', 'utf8', function (error, data) {
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        //Read Error Check
        if (error){
            response.end('File Read Error!');
        }
        var fn = jade.compile(data);
        response.end(fn({
            name : 'Sophie',
            description : 'Love'            
        }));
    });
}).listen(52273, function () {
    console.log('Server Running at 52273');
});

