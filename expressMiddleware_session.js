var express = require('express');
var session = require('express-session');

var app = express();

//Middleware Connection
app.use(session({
    secret : 'secret Key',
    resave : false,
    saveUninstalized : true
}));

app.use(function(request, response){
    //Save Session
    request.session.now = (new Date()).toUTCString();

    //Response
    response.send(request.session);
});


//Run Server
app.listen(52273, function(){
    console.log('Server Running!');
});
