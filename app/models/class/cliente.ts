import { IUsuario } from "../IUsuario.js";
import { Endereco } from "../endereco.js";
import { Pessoa } from "../pessoa.js";
import { ContaCorrente } from "./contacorrente.js";
import { ContaPoupanca } from "./contapoupanca";

//Classe Cliente que herda de Pessoa
export class Cliente extends Pessoa implements IUsuario {
    private _endereco: Array<Endereco>;
    private _vip: Boolean;
    public contaCorrente: ContaCorrente;
    public contaPoupanca: ContaPoupanca;

    constructor(
        cpf: string,
        nome: string,
        telefone: string,
        vip: Boolean,
        endereco: Endereco
    ) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._endereco = [];
        this._endereco.push(endereco);
    }

    //Gets e Seters
    public get vip(): Boolean {
        return this._vip;
    }

    public set vip(value: Boolean) {
        this._vip = value;
    }

    //Método adiciona endereço a uma pessoa
    public adicinaEndereco(endereco: Endereco): void {
        this._endereco.push(endereco);
    }

    //Método de listar endereços de uma pessoa
    public listarEndereço(): void {
        this._endereco.forEach((element) => {
            console.log(element);
        });
    }

    //Implementação da Interface
    autenticar(): boolean {
        return true;
    }
}
