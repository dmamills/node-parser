var symbols = {};

/*
Defines language grammar
*/


symbols.keywords = "if then else elseif endif while loop endloop print return exit".split(' ');
symbols.oneChar = "= ( ) < > / * + - ! & . ;".split(' ');
symbols.twoChar = "== <= >= <> != ++ ** -- += -= ||".split(' ');
symbols.whitespace = " \t\n".split('');


symbols.ID_START_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split('');
symbols.ID_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_".split('');
symbols.STRING_STARTCHARS = ['"',"'"];
symbols.NUMBER_STARTCHARS ="0123456789".split('');
symbols.NUMBER_CHARS = "0123456789.".split('');
symbols.END_OF_FILE = "\0";

symbols.TOKEN_TYPES = {
    STRING: "String",
    IDENTIFIER: "Identifier",
    NUMBER:"Number",
    WHITESPACE: "Whitespace",
    COMMENT: "Comment",
    EOF: "Eof"
};

module.exports = symbols;
