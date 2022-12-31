import { Pessoa } from "../models/pessoa.js";

export function app1() {
    var fulano = new Pessoa();

    fulano.nome = 'Josemar Gama';
    console.log(fulano.nome);
}