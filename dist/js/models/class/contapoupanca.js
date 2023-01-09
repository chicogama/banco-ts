import { Conta } from "../conta.js";
export class ContaPoupanca extends Conta {
    constructor(agencia, numero, rentabilidade) {
        super(agencia, numero);
        this._rentabilidade = rentabilidade;
    }
    get rentabilidade() {
        return this._rentabilidade;
    }
    set rentabilidade(value) {
        this._rentabilidade = value;
    }
    calcularSaldo() {
        var saldoAtual = 0;
        var creditos = 0;
        var debitos = 0;
        this.credito.forEach((Object) => {
            creditos += Object.valor;
        });
        this.debito.forEach((Object) => {
            debitos += Object.valor;
        });
        saldoAtual = creditos - debitos;
        return saldoAtual;
    }
    rendimentoConta() {
        var rendimentos = 0;
        var creditos = 0;
        var debitos = 0;
        this.credito.forEach((Object) => {
            creditos = (creditos + Object.valor) * this.rentabilidade;
        });
        this.debito.forEach((Object) => {
            debitos = (debitos + Object.valor) * this.rentabilidade;
        });
        rendimentos = creditos - debitos;
        return rendimentos;
    }
}
