import { IUsuario } from "./pessoa/IUsuario";
import { Endereco } from "../models/pessoa/endereco";
import { Pessoa } from "./pessoa/pessoa.js";
import { Conta } from "./conta/conta";

//Classe Cliente que herda de Pessoa
export class Cliente extends Pessoa implements IUsuario {
    private _enderecos: Array<Endereco>;
    private _vip: Boolean;
    private _contas: Array<Conta>;

    constructor(
        cpf: string,
        nome: string,
        telefone: string,
        vip: Boolean,
        endereco: Endereco
    ) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._enderecos = [];
        this._contas = [];
        this._enderecos.push(endereco);
    }

    //Gets e Seters
    public get vip(): Boolean {
        return this._vip;
    }

    public set vip(value: Boolean) {
        this._vip = value;
    }

    //Método adiciona endereço a uma pessoa
    public adicionarEndereco(endereco: Endereco): void {
        this._enderecos.push(endereco);
    }

    public adicionarConta(conta: Conta) {
        this._contas.push(conta);
    }

    //Método de listar endereços de uma pessoa
    public listarEndereço(): void {
        this._enderecos.forEach((element) => {
            console.log(element);
        });
    }

    public listarContas() {
        this._contas.forEach((element) => {
            console.log(element);
        });
    }

    //Implementação da Interface
    autenticar(): boolean {
        return true;
    }
}
