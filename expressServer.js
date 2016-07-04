var http = require('http');
var express = require('express');

//Server
var app = express();

//Setting Request Event Listener
app.use(function (req, res, next){
    var agent = req.header('User-Agent');
    console.log(agent);
    if(agent.toLowerCase().match(/chrome/)){
        res.send('<h1>Chrome!</h1>');
    }
    else{
        res.send('<h1>Express!</h1>');
    }
});

//Create Server By http
http.createServer(app).listen(52273, function () {
    console.log('Server Running');
});


