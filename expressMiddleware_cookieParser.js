var http = require('http');
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');

//Server Definition
var app = express();

//Set MiddleWare
app.use(morgan('combined'));
app.use(cookieParser());

app.get('/setCookie' , function (request, response) {
    response.cookie('string', 'cookie');
    response.cookie('json', {
        name : 'cookeie',
        property : 'delicious'
    });
    response.redirect('/getCookie');
});

app.get('/getCookie', function (request, response) {
    response.send(request.cookies);
});


//Create Server By http
http.createServer(app).listen(52273, function () {
    console.log('Server Running');
});


