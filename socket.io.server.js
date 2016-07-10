var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (req,res){
    fs.readFile('htmlpage.html', function (error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
    });
}).listen(52273,function () {
    console.log('Server Running');
});

// Socket Server Connection
var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
    console.log('Connection 확인!');
    // Recent id get 
    var roomName;

    /*Event Link*/
    // Joining Room by roomname 
    socket.on('join', function (data) {
        roomName = data;
        socket.join(data);
    });
    
    // Get Messages
    socket.on('getmessage', function (data) {
        console.log('현재 룸 이름 : ' + roomName);
        io.sockets.in(roomName).emit('showmessage',data);
    });

    socket.on('sendbroadcast', function (data) {
        console.log('sendbroadcast Event is emitted. :' ,data);
        socket.broadcast.emit('showmessage', 'Broadcast!');
    });
});

