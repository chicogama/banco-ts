import { ContaCorrente } from "../models/contacorrente.js";
import { Credito } from "../models/conta/credito.js";
import { Endereco } from "../models/pessoa/endereco.js";
import { Cliente } from "../models/cliente.js";
import { ContaPoupanca } from "../models/contapoupanca.js";
export function app4() {
    const clienteCorrente = new Cliente("12309332733", "Josemar Gama", "96991228882", true, new Endereco("68903310", "Av. Orlando Dias", "992", "N/A", "Macapá", "Amapá"));
    const contaCorrente = new ContaCorrente("001", "222", 5000);
    clienteCorrente.adicionarConta(contaCorrente);
    contaCorrente.depositar(new Credito(1000, new Date()));
    const clientePoupanca = new Cliente("44509876411", "ChicoGama", "96991277292", true, new Endereco("68900000", "Av. São José", "123", "N/A", "Santana", "Amapá"));
    const contaPoupanca = new ContaPoupanca("002", "111", 0.01);
    clientePoupanca.adicionarConta(contaPoupanca);
    contaPoupanca.depositar(new Credito(1000, new Date("1111,11,11")));
    console.log("Cliente " +
        clienteCorrente.nome +
        " Seu saldo é de R$: " +
        contaCorrente.calcularSaldo());
    console.log("Cliente " +
        clientePoupanca.nome +
        " Seu saldo é de R$: " +
        contaPoupanca.calcularSaldo());
    contaCorrente.transferir(contaPoupanca, 1500);
    console.log("Cliente " +
        clienteCorrente.nome +
        " Seu saldo é de R$: " +
        contaCorrente.calcularSaldo());
    console.log("Cliente " +
        clientePoupanca.nome +
        " Seu saldo é de R$: " +
        contaPoupanca.calcularSaldo());
}
