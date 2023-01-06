import { Conta } from "../conta.js";
export class ConteCorrente extends Conta {
    constructor(agencia, numero, limite) {
        super(agencia, numero);
        this._limite = limite;
    }
    get limte() {
        return this._limite;
    }
    set limite(value) {
        this._limite = value;
    }
}
