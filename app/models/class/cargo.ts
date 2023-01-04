export class Cargo {
    private _nome: String;

    constructor(nome: String) {
        this._nome = nome;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(value) {
        this._nome = value;
    }
}
