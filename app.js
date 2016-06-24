var appevent = require('./appevents.js');

appevent.timer.on('tick',function () {
    console.log('이벤트가 실행되었습니다.');
});

appevent.timer.on('end', function (code) {
    console.log(code + '번 코드가 반환되었습니다.');
});

console.log('Start');

