var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var query = url.parse(request.url,true).query;
    console.log(query);
    if(query.page=='page1'){
        fs.readFile('page1.html',function (error, data) {
            response.writeHead(200, {
                'Content-Type' : 'text/html',
            });
            response.end(data);
        });
        console.log('page1 Loaded');
    }
    else if(query.page == 'page2'){
        fs.readFile('page2.html', function (error, data) {
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.end(data);
        });
        console.log('page2 Loaded');
    }
}).listen(52273, function () {
    console.log('HTML Server is NOW Running');    
});

