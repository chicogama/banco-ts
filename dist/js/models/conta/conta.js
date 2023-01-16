//Classe abstrata de conta
export class Conta {
    constructor(agencia, numero) {
        this._agencia = agencia;
        this._numero = numero;
        this.debito = [];
        this.credito = [];
    }
    //Gets e Seters
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
    //Método depositar
    depositar(valor) {
        this.credito.push(valor);
    }
    //Método sacar
    sacar(valor) {
        this.debito.push(valor);
    }
}
