
function Token(char) {
    this.cargo = char.c;
    this.lineno= char.getLineNo();
    this.colno = char.getColNo();
    this.type = undefined;
}

module.exports = Token;
