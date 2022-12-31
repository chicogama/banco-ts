import { Pessoa } from "./models/pessoa.js";
import { Conta } from "./models/conta.js";

var pessoa = new Pessoa();
var conta = new Conta();

pessoa.nome = "Josemar Gama";
pessoa.nascimento = new Date();

console.log('pessoa.nome');
console.log(pessoa.nascimento);

conta.agencia = 1;
conta.numero = 123;

console.log(conta.agencia);
console.log(conta.numero);