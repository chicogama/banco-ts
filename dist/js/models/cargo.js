//classe de cargos de um funcionário
export class Cargo {
    constructor(nome) {
        this._nome = nome;
    }
    //Gets e Seters
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
}
