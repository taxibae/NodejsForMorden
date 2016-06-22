var crypto = require('crypto');

//Create Hash
var shasum = crypto.createHash('sha1');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

//Print
console.log(output);

var key = '아무도 알지 못하는 나의 키';
var input = 'PASSWORD';

//Incrypt
var cipher = crypto.createCipher('aes192',key);
cipher.update(input,'utf8','base64');
var cipherOutput = cipher.final('base64');

//Decrypt
var decipher = crypto.createDecipher('aes192',key);
decipher.update(cipherOutput, 'base64','utf8');
var decipherOutput = decipher.final('utf8');

//output
console.log('원래 문자열 : ' + input);
console.log('암호화된 문자열 : ' + cipherOutput);
console.log('암호 해독한 문자열 : ' + decipherOutput);