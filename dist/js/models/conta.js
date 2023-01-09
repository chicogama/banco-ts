export class Conta {
    constructor(agencia, numero) {
        this._agencia = agencia;
        this._numero = numero;
        this.debito = [];
        this.credito = [];
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
    depositar(valor) {
        this.credito.push(valor);
    }
    sacar(valor) {
        this.debito.push(valor);
    }
}
