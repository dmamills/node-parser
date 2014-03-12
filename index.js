var fs = require('fs'),
    Lexer = require('./src/lexer');

var text = "FOO = 5\nBAR = 'some neato string'\nFOOBAR = FOO + 2\n if FOOBAR == FOO+2 BAR ='WOW'\n"
var l = new Lexer(text);
var r = l.run();
console.log(r);
