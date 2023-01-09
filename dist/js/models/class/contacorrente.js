import { Conta } from "../conta.js";
import { Credito } from "../credito.js";
import { Debito } from "../debito.js";
export class ContaCorrente extends Conta {
    constructor(agencia, numero, limite) {
        super(agencia, numero);
        this._limite = limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(value) {
        this._limite = value;
    }
    get limte() {
        return this._limite;
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
    transferir(contaDestino, valor) {
        const saldo = this.calcularSaldo();
        if (saldo <= 0) {
            console.log("Você não possui saldo para esta operação!");
        }
        if (valor > this.limite) {
            console.log("O valor requisitado é maior que o limite da conta, operação não realizada!");
        }
        else {
            contaDestino.depositar(new Credito(valor, new Date()));
            this.sacar(new Debito(valor, new Date()));
        }
    }
}
