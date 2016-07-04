var http = require('http');
var express = require('express');
var morgan = require('morgan');

//Server Definition
var app = express();

//morgan Setting
morgan.token('id', function(){return 'token defined'} );

//Set MiddleWare
app.use(morgan(':id'));

app.use(function (requset, response) {
    response.send('<h1>Express!</h1>');
})


//Create Server By http
http.createServer(app).listen(52273, function () {
    console.log('Server Running');
});


