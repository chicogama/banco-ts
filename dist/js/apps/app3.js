import { Cliente } from "../models/cliente.js";
import { Endereco } from "../models/pessoa/endereco.js";
import { ContaCorrente } from "../models/contacorrente.js";
import { Credito } from "../models/conta/credito.js";
export function app3() {
    const clienteCorrente = new Cliente("12309332733", "Josemar Gama", "96991228882", true, new Endereco("68903310", "Av. Orlando Dias", "992", "N/A", "Macapá", "Amapá"));
    const contaClienteCorrente = new ContaCorrente("111", "222", 500);
    clienteCorrente.adicionarConta(contaClienteCorrente);
    console.log(clienteCorrente);
    contaClienteCorrente.depositar(new Credito(100, new Date()));
    contaClienteCorrente.depositar(new Credito(100, new Date()));
    contaClienteCorrente.depositar(new Credito(100, new Date()));
    console.log("Cliente " +
        clienteCorrente.nome +
        " Seu saldo é de R$: " +
        contaClienteCorrente.calcularSaldo());
}
