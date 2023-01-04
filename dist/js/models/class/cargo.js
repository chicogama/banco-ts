export class Cargo {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
}
