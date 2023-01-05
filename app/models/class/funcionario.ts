import { IUsuario } from "../IUsuario";
import { Cargo } from "../cargo.js";
import { Pessoa } from "../pessoa.js";

export class Funcionario extends Pessoa implements IUsuario {
    private _salario: Number;
    private _cargos: Array<Cargo>;

    constructor(
        cpf: String,
        nome: String,
        telefone: String,
        cargo: Cargo,
        salario: Number
    ) {
        super(cpf, nome, telefone);
        this._cargos = [];
        this._cargos.push(cargo);
        this._salario = salario;
    }

    public get salario() {
        return this._salario;
    }

    public set salario(value) {
        this._salario = value;
    }

    public funcionarioCargo(cargo: Cargo): void {
        this._cargos.push(cargo);
    }

    autenticar(): boolean {
        return true;
    }
}
