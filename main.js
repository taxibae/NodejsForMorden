var urlmodule = require('url');
var queryString = require('querystring');
var util = require('util');

var urlParsed = urlmodule.parse('http://www.hanb.co.kr/trackback.html?isbn=978-89-7914-874-9');
var urlParsedByQuery = urlmodule.parse('http://www.hanb.co.kr/trackback.html?isbn=978-89-7914-874-9',true);
console.log(urlParsedByQuery);
console.log('urlParsed : \n' + urlParsed);
var parsedObject = queryString.parse(urlParsed.query);
console.log(parsedObject);
for(var key in parsedObject){
    console.log(key + ' : ' +parsedObject[key]);
};


