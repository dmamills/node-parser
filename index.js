var fs = require('fs'),
    Scanner = require('./src/scanner');

var text = "HELLO WORLD \n THIS IS TEXT";
var scanner = new Scanner(text);
var a = scanner.run();

console.log('POS\tLINENO\tCOLNO\tVAL');

a.forEach(function(el){
  console.log(el.getPos() +
              '\t' + el.getLineNo() +
              '\t' + el.getColNo() +
              '\t' +el.toString());
});
