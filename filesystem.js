var fileSystem = require('fs');
console.log('파일 동기/비동기 읽기 테스트');
console.log('동기 읽기');
console.time('alpha');
try{
    var text = fileSystem.readFileSync('README.md', 'utf8');
    console.log(text);
}
catch(e){
    console.log(e);
}

try{
    fileSystem.writeFileSync('created.txt', 'Hello World!', 'utf8');
    console.log('Write OK!');
}
catch(e){
    console.log(e);
}
console.timeEnd('alpha');

