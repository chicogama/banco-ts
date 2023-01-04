import { Pessoa } from "../models/pessoa.js";
import { Conta } from "../models/conta.js";

export function app2() {
    const pessoa = new Pessoa("00122200022", "Josemar Gama", "991277292");
    console.log(pessoa.nome);
}
