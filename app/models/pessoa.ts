export class Pessoa {

    private _nome: String;
    private _nascimento: Date;

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }

    public get nascimento(): Date {
        return this._nascimento;
    }
    public set nascimento(value: Date) {
        this._nascimento = value;
    }
}