var http = require('http');
var express = require('express');
var morgan = require('morgan');

//Server Definition
var app = express();


//Set MiddleWare
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.use(function (requset, response) {
    //response.send('<h1>Express!</h1>');
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.end('<html><head></head><body><img src="picture_1.jpg" width="100% /></body></html>');
});


//Create Server By http
http.createServer(app).listen(52273, function () {
    console.log('Server Running');
});


