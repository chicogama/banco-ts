import { Pessoa } from "../pessoa.js";
//Classe Cliente que herda de Pessoa
export class Cliente extends Pessoa {
    constructor(cpf, nome, telefone, vip, endereco) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._endereco = [];
        this._endereco.push(endereco);
    }
    //Gets e Seters
    get vip() {
        return this._vip;
    }
    set vip(value) {
        this._vip = value;
    }
    //Método adiciona endereço a uma pessoa
    adicinaEndereco(endereco) {
        this._endereco.push(endereco);
    }
    //Método de listar endereços de uma pessoa
    listarEndereço() {
        this._endereco.forEach((element) => {
            console.log(element);
        });
    }
    //Implementação da Interface
    autenticar() {
        return true;
    }
}
