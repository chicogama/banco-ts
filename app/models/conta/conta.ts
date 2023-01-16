import { Credito } from "./credito.js";
import { Debito } from "./debito.js";

//Classe abstrata de conta
export abstract class Conta {
    private _agencia: String;
    private _numero: String;
    public debito: Array<Debito>;
    public credito: Array<Credito>;

    constructor(agencia: String, numero: String) {
        this._agencia = agencia;
        this._numero = numero;
        this.debito = [];
        this.credito = [];
    }

    //Gets e Seters
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

    //Método depositar
    public depositar(valor: Credito) {
        this.credito.push(valor);
    }

    //Método sacar
    public sacar(valor: Debito) {
        this.debito.push(valor);
    }
}
