export class Conta {

    private _agencia: Number;
    private _numero: Number;

    public get agencia(): Number {
        return this._agencia;
    }

    public set agencia(value: Number) {
        this._agencia = value;
    }
    public get numero(): Number {
        return this._numero;
    }

    public set numero(value: Number) {
        this._numero = value;
    }
}

