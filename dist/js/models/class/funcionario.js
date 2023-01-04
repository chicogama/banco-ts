import { Pessoa } from "../pessoa.js";
export class Funcionario extends Pessoa {
    constructor(cpf, nome, telefone, cargo, salario) {
        super(cpf, nome, telefone);
        this._cargos = [];
        this._cargos.push(cargo);
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    funcionarioCargo(cargo) {
        this._cargos.push(cargo);
    }
}
