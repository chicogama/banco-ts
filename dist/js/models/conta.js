export class Conta {
    constructor(agencia, numero) {
        this.agencia = agencia;
        this._numero = numero;
        this._debito = [];
        this._credito = [];
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(value) {
        this._agencia = value;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    depositar(valor) { }
}
