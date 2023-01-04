import { Endereco } from "../endereco";
import { Pessoa } from "../pessoa";

export class Cliente extends Pessoa {
    private _endereco: Endereco;
    private _vip: Boolean;
}
