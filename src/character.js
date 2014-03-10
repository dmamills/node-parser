function Character(c,pos,lineno,colno,source) {
    this.c = c;
    this.pos = pos;
    this.lineno = lineno;
    this.colno = colno;
    this.source = source;
}


Character.prototype.getPos = function() { return this.pos; };
Character.prototype.getLineNo = function() { return this.lineno; };
Character.prototype.getColNo = function() { return this.colno; };
Character.prototype.getSource = function() { return this.source; };
Character.prototype.toString = function() {

    if(this.c === ' ') return "SPACE";
    if(this.c === '\n') return "NEWLINE";
    if(this.c === '\t') return "TAB";
    if(this.c === '\0') return "EOF";
    return this.c;
};

module.exports = Character;
