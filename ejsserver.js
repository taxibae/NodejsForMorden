var ejs = require('ejs');
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
    //reading ejsPage.ejs
    fs.readFile('ejsPage.ejs', 'utf8', function (error, data) {
        response.writeHead(200, { 'Content-Type' : 'text/html' });
        if (error){
            data = 'error!';
        }
        response.end(ejs.render(data, {
            name : 'Sophie',
            description : 'Love'            
        }));
    });
}).listen(52273, function () {
    console.log('Server Running at 52273');
});
