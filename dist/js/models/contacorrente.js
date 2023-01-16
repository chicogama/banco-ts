import { Conta } from "./conta/conta.js";
import { Credito } from "./conta/credito.js";
import { Debito } from "./conta/debito.js";
//Classe de conta corrente que herda de Conta.
export class ContaCorrente extends Conta {
    constructor(agencia, numero, limite) {
        super(agencia, numero);
        this._limite = limite;
    }
    //Gets e Seters
    get limite() {
        return this._limite;
    }
    set limite(value) {
        this._limite = value;
    }
    get limte() {
        return this._limite;
    }
    //Método para calcular saldo
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
    //Método para transferir saldo de conta
    transferir(contaDestino, valor) {
        const saldo = this.calcularSaldo();
        if (saldo <= 0) {
            console.log("Você não possui saldo para esta operação!");
        }
        if (valor > this.limite) {
            console.log("O valor requisitado é maior que o limite da conta, operação não realizada!");
        }
        if (valor > saldo) {
            console.log("O valor informado é maior que o seu saldo atual, operação não realizada!");
        }
        else {
            contaDestino.depositar(new Credito(valor, new Date()));
            this.sacar(new Debito(valor, new Date()));
        }
    }
}
