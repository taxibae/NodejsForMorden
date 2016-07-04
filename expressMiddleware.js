var http = require('http');
var express = require('express');

//Server
var app = express();

//Setting Request Event Listener
app.use(function (req, res, next){
    console.log('First Middleware');
    //next();
});
app.use(function (req, res, next){
    console.log('Second Middleware');
    //next();
});
app.use(function (req, res, next){
    console.log('Third Middleware');
    res.send('<h1>Express Basic</h1>');
});

//Create Server By http
http.createServer(app).listen(52273, function () {
    console.log('Server Running');
});


