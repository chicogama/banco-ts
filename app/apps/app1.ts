import { Pessoa } from "../models/pessoa.js";
import { Conta } from "../models/conta.js";

export function app1() {
    const fulano = new Pessoa("00823973255", "Josemar Gama", "991277292");
    const conta = new Conta(123);

    console.log(fulano.nome);
    console.log(conta.numero);
}
