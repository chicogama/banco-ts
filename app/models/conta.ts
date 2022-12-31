export class Conta {

    private _numero: Number;
    public get numero(): Number {
        return this._numero;
    }

    public set numero(value: Number) {
        this._numero = value;
    }
}

