exports.timer = new process.EventEmitter();
var count = 0;

var id = setInterval(function () {
    exports.timer.emit('tick');
    count++;
    if(count>3){
        exports.timer.emit('end',[0]);
        clearInterval(id);
    }
},1000);

