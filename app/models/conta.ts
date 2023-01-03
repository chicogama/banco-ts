export class Conta {
    private _numero: Number;
    private _dataCriação: Date;

    constructor(numero: Number) {
        this._numero = numero;
    }

    public get numero(): Number {
        return this._numero;
    }

    public set numero(value: Number) {
        this._numero = value;
    }
}
