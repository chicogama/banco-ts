import { Pessoa } from "./pessoa/pessoa.js";
//Classe Cliente que herda de Pessoa
export class Cliente extends Pessoa {
    constructor(cpf, nome, telefone, vip, endereco) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._enderecos = [];
        this._contas = [];
        this._enderecos.push(endereco);
    }
    //Gets e Seters
    get vip() {
        return this._vip;
    }
    set vip(value) {
        this._vip = value;
    }
    //Método adiciona endereço a uma pessoa
    adicionarEndereco(endereco) {
        this._enderecos.push(endereco);
    }
    adicionarConta(conta) {
        this._contas.push(conta);
    }
    //Método de listar endereços de uma pessoa
    listarEndereço() {
        this._enderecos.forEach((element) => {
            console.log(element);
        });
    }
    listarContas() {
        this._contas.forEach((element) => {
            console.log(element);
        });
    }
    //Implementação da Interface
    autenticar() {
        return true;
    }
}
