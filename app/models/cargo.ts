//classe de cargos de um funcionário
export class Cargo {
    private _nome: String;

    constructor(nome: String) {
        this._nome = nome;
    }

    //Gets e Seters
    public get nome(): String {
        return this._nome;
    }

    public set nome(value: String) {
        this._nome = value;
    }
}
