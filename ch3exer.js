console.log('filename' + __filename);
console.log('%s','문자열입니다.');

console.log('시간측정 시작합니다.');
console.time('alpha');
var output = 1;
for(var i = 1; i<10;i++){
    output *= i;
}
console.log('%d',output);
console.timeEnd('alpha');