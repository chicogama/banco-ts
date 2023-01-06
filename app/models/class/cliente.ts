import { IUsuario } from "../IUsuario.js";
import { Endereco } from "../endereco.js";
import { Pessoa } from "../pessoa.js";

export class Cliente extends Pessoa implements IUsuario {
    private _endereco: Array<Endereco>;
    private _vip: Boolean;

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

    public get vip(): Boolean {
        return this._vip;
    }

    public set vip(value: Boolean) {
        this._vip = value;
    }

    public adicinaEndereco(endereco: Endereco): void {
        this._endereco.push(endereco);
    }

    public listarEndereço(): void {
        this._endereco.forEach((element) => {
            console.log(element);
        });
    }

    autenticar(): boolean {
        return true;
    }
}
