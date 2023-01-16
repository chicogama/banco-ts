//classe que implementa conta Poupança, herda da classe conta
import { Conta } from "../conta.js";

export class ContaPoupanca extends Conta {
    private _rentabilidade: number;

    constructor(agencia: String, numero: String, rentabilidade: number) {
        super(agencia, numero);
        this._rentabilidade = rentabilidade;
    }

    //Gets e Seters
    public get rentabilidade(): number {
        return this._rentabilidade;
    }

    public set rentabilidade(value: number) {
        this._rentabilidade = value;
    }

    //Método para calcular saldo
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

    //Método para calcular rendimento da conta poupança
    public rendimentoConta() {
        var rendimentos: number = 0;
        var creditos: number = 0;
        var debitos: number = 0;

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
