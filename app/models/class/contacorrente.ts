import { Conta } from "../conta.js";
import { Credito } from "../credito.js";
import { Debito } from "../debito.js";

export class ContaCorrente extends Conta {
    private _limite: number;

    constructor(agencia: String, numero: String, limite: number) {
        super(agencia, numero);
        this._limite = limite;
    }

    public get limite(): number {
        return this._limite;
    }

    public set limite(value: number) {
        this._limite = value;
    }

    public get limte(): number {
        return this._limite;
    }

    public calcularSaldo() {
        var saldoAtual: number = 0;
        var creditos: number = 0;
        var debitos: number = 0;

        this.credito.forEach((Object) => {
            creditos += Object.valor;
        });

        this.debito.forEach((Object) => {
            debitos += Object.valor;
        });

        saldoAtual = creditos - debitos;
        return saldoAtual;
    }

    public transferir(contaDestino: Conta, valor: number) {
        const saldo = this.calcularSaldo();
        if (saldo <= 0) {
            console.log("Você não possui saldo para esta operação!");
        }
        if (valor > this.limite) {
            console.log(
                "O valor requisitado é maior que o limite da conta, operação não realizada!"
            );
        } else {
            contaDestino.depositar(new Credito(valor, new Date()));
            this.sacar(new Debito(valor, new Date()));
        }
    }
}
