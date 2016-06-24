//Handler Define
var eventHandler = function (error) {
    console.log('예외 발생! 한 번만 봐주마!');
    process.removeListener('uncaughtException', eventHandler);
    console.log('제거되었음!');
}


//Event Connection
process.on('uncaughtException', eventHandler);

process.on('exit', function () {
    console.log('Bye Bye!');
});


//강제 예외 발생!
var count = 0;

var id = setInterval(function () {
    console.log('에러를 1회 실행합니다');
    error.error.error('^_^');
    console.log('에러 발생후 여기까지 옵니까?');
}, 2000);
