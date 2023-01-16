//classe abstrata Pessoa
export class Pessoa {
    constructor(cpf, nome, telefone) {
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }
    //Gets e Seters
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
}
