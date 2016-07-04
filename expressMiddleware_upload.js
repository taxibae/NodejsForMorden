var http = require('http');
var fs = require('fs');
var express = require('express');
var cookieParser = require('cookie-parser');
var multiparty = require('multiparty');



//Server Definition
var app = express();


//Set MiddleWare
app.use(cookieParser());

app.get('/', function(request, response){
    fs.readFile('public/index.html', function (error, data) {
        response.send(data.toString());
    });
});

app.post('/', function (request, response) {
    var form = new multiparty.Form();
    form.parse(request, function (err, field, files) {
        response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.write('received upload:\n\n');
    })
});


//Create Server By http
http.createServer(app).listen(52273, function () {
    console.log('Server Running');
});


