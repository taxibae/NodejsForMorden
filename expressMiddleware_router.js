var http = require('http');
var express = require('express');
var morgan = require('morgan');

//Server Definition
var app = express();


//Set MiddleWare
app.use(morgan('combined'));

app.get('/a', function(request,response){
    response.send('<a href="/b">Go to B</a>');
});
app.get('/b', function(require,response){
    response.send('<a href="/a">Go to A</a>');
});
app.get('/page/:number', function (request, response) {
    var id = request.param('number');
    response.send('요청된 페이지 : ' + id);
})
app.all('*',function (request, response) {
    response.send(404, 'HTTP 404 - Page Not Found');
});

//Create Server By http
http.createServer(app).listen(52273, function () {
    console.log('Server Running');
});

