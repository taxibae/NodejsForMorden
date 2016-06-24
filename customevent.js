var custom = new process.EventEmitter();

custom.on('tick', function () {
    console.log('Event Tick!');
});

custom.emit('tick');
