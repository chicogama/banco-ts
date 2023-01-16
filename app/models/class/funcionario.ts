import { IUsuario } from "../IUsuario";
import { Cargo } from "../cargo.js";
import { Pessoa } from "../pessoa.js";

//Classe funcionario que herda de pessoa
export class Funcionario extends Pessoa implements IUsuario {
    private _salario: number;
    private _cargos: Array<Cargo>;

    constructor(
        cpf: String,
        nome: String,
        telefone: String,
        cargo: Cargo,
        salario: number
    ) {
        super(cpf, nome, telefone);
        this._cargos = [];
        this._cargos.push(cargo);
        this._salario = salario;
    }

    //Gets e Seters
    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
    }

    public funcionarioCargo(cargo: Cargo): void {
        this._cargos.push(cargo);
    }

    //Interface que verifica se usuário está autenticado
    autenticar(): boolean {
        return true;
    }
}
