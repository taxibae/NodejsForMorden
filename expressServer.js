//Module Extraction
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

//Create Server
var app = express();

//Middleware
app.use(bodyParser.urlencoded({
    extended : false
}));

//Router
app.get('/user', function(req, res) {
    
});
app.get('/user/:id', function(req, res) {
    
});
app.post('/user', function(req, res) {
    
});
app.put('/user/:id', function(req, res) {
    
});
app.delete('/user/:id', function(req, res) {
    
});

//Create Server By http
app.listen(52273, function () {
    console.log('Server Running');
});


