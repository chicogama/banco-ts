import { Pessoa } from "./pessoa/pessoa.js";
//Classe funcionario que herda de pessoa
export class Funcionario extends Pessoa {
    constructor(cpf, nome, telefone, cargo, salario) {
        super(cpf, nome, telefone);
        this._cargos = [];
        this._cargos.push(cargo);
        this._salario = salario;
    }
    //Gets e Seters
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    funcionarioCargo(cargo) {
        this._cargos.push(cargo);
    }
    //Interface que verifica se usuário está autenticado
    autenticar() {
        return true;
    }
}
