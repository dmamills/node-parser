var Scanner = require('./scanner'),
    Token = require('./token'),
    SYMBOLS = require('./symbols');

function Lexer(sourceText) {
    this.sourceText = sourceText;
    this.scanner = new Scanner(sourceText);
}

Lexer.prototype.run = function() {
    var a = this.scanner.run();
    var r = [],
        i=0,
        c;

    while(a.length !== 0 ) {
        c = a.shift();

        token = new Token(c);
        if (c.toString() == "EOF") {
            token.type = SYMBOLS.TOKEN_TYPES.EOF;
            r.push(token);
            continue;
        }

        if(c.toString() == "SPACE" || c.toString() === "TAB") {
            token.type = SYMBOLS.TOKEN_TYPES.WHITESPACE;
            r.push(token);
            continue;
        }

        if(SYMBOLS.ID_START_CHARS.indexOf(c.toString()) > -1) {
            token.type =  SYMBOLS.TOKEN_TYPES.IDENTIFIER;
            while(SYMBOLS.ID_CHARS.indexOf(a[0].toString()) >-1) {
                c = a.shift();
                token.cargo += c.toString();
            }

            if (SYMBOLS.keywords.indexOf(token.cargo) >-1 ) {
                token.type = token.cargo.toUpperCase();
            }
            r.push(token);
            continue;
        }

        if(SYMBOLS.NUMBER_STARTCHARS.indexOf(c.toString()) >-1) {
            token.type = SYMBOLS.TOKEN_TYPES.NUMBER;

            while(SYMBOLS.NUMBER_CHARS.indexOf(a[0].toString()) >-1) {
                c = a.shift();
                token.cargo += c.toString();
            }
            r.push(token);
            continue;
        }

        if(SYMBOLS.STRING_STARTCHARS.indexOf(c.toString()) > -1) {
            var quoteType = c.c;
            token.type= SYMBOLS.TOKEN_TYPES.STRING;

            while(a[0].toString() !== quoteType) {
                    c = a.shift();
                    if(c.c.toString() == "EOF") {
                        throw new Error("Unexpected end of file.");
                    }
                    token.cargo += c.c.toString();
            }

            //pop off end quote and remove front quote from string
            a.shift();
            token.cargo = token.cargo.split('').slice(1).join('');
            r.push(token);
            continue;
        }
    }

    return r;
};


module.exports = Lexer;
