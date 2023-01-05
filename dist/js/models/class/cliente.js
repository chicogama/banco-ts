import { Pessoa } from "../pessoa.js";
export class Cliente extends Pessoa {
    constructor(cpf, nome, telefone, vip, endereco) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._endereco = [];
        this._endereco.push(endereco);
    }
    get vip() {
        return this._vip;
    }
    set vip(value) {
        this._vip = value;
    }
    adicinaEndereco(endereco) {
        this._endereco.push(endereco);
    }
    listarEndereço() {
        this._endereco.forEach((element) => {
            console.log(element);
        });
    }
    autenticar() {
        return true;
    }
}
