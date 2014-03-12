var fs = require('fs'),
    Lexer = require('./src/lexer');

var text = "Hello World\n THIS\t IS if else 'TEXT is a string' also some \"another string\" numbers 123 42.34 lol wow";
var l = new Lexer(text);
var r = l.run();
console.log(r);
