var Character = require('./character');


function Scanner(sourceText) {
    this.sourceText = sourceText;
    this.lastIdx = sourceText.length;
    this.sourceIdx = -1;
    this.lineIdx = 1;
    this.colIdx = -1;
}

Scanner.prototype.get = function() {
    this.sourceIdx++;
    if(this.sourceIdx > 0) {
        if(this.sourceText[this.sourceIdx-1] == "\n") {
            this.lineIdx++;
            this.colIdx = -1;
        }
    }

    this.colIdx++;
    var c = this.sourceText[this.sourceIdx];
    if(this.sourceIdx >= this.lastIdx) {
        c = "\0";
    }
    return new Character(c,this.sourceIdx,this.lineIdx,this.colIdx,this.sourceText);
};

Scanner.prototype.run = function() {
    var a = [],
        c = this.get();
    while(true) {
        a.push(c);
        if(c.toString() === "EOF") break;
        c = this.get();
    }
    return a;
};


module.exports = Scanner;
