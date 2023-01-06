import { Conta } from "../conta.js";
import { Credito } from "../credito";
import { Debito } from "../debito";

export class ConteCorrente extends Conta {
    private _limite: Number;

    constructor(agencia: String, numero: String, limite: Number) {
        super(agencia, numero);
        this._limite = limite;
    }

    public get limte(): Number {
        return this._limite;
    }

    public set limite(value: Number) {
        this._limite = value;
    }
}
