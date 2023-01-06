import { Credito } from "./credito.js";
import { Debito } from "./debito.js";

export abstract class Conta {
    private _agencia: String;
    private _numero: String;
    private _debito: Array<Debito>;
    private _credito: Array<Credito>;

    constructor(agencia: String, numero: String) {
        this.agencia = agencia;
        this._numero = numero;
        this._debito = [];
        this._credito = [];
    }

    public get agencia(): String {
        return this._agencia;
    }

    public set agencia(value: String) {
        this._agencia = value;
    }

    public get numero(): String {
        return this._numero;
    }

    public set numero(value: String) {
        this._numero = value;
    }

    public depositar(valor: Number) {}
}
