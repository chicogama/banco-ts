import { Conta } from "../conta.js";
import { Credito } from "../credito.js";
import { Debito } from "../debito.js";

export class ContaPoupanca extends Conta {
    private _rentabilidade: number;

    constructor(agencia: String, numero: String, rentabilidade: number) {
        super(agencia, numero);
        this._rentabilidade = rentabilidade;
    }

    public get rentabilidade(): number {
        return this._rentabilidade;
    }

    public set rentabilidade(value: number) {
        this._rentabilidade = value;
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

    public rendimentoConta() {
        var mes: number;
        this.credito.forEach((Object) => {
            mes = Object.data.getMonth();
            if (mes == 3) {
                console.log(Object.valor);
            }
        });
    }
}
