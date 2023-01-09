import { ContaCorrente } from "../models/class/contacorrente.js";
import { Credito } from "../models/credito.js";
import { Endereco } from "../models/endereco.js";
import { Cliente } from "../models/class/cliente.js";
import { ContaPoupanca } from "../models/class/contapoupanca.js";
export function app4() {
    const clienteCorrente = new Cliente("12309332733", "Josemar Gama", "96991228882", true, new Endereco("68903310", "Av. Orlando Dias", "992", "N/A", "Macapá", "Amapá"));
    clienteCorrente.contaCorrente = new ContaCorrente("001", "222", 500);
    clienteCorrente.contaCorrente.depositar(new Credito(1000, new Date()));
    const clientePoupanca = new Cliente("44509876411", "ChicoGama", "96991277292", true, new Endereco("68900000", "Av. São José", "123", "N/A", "Santana", "Amapá"));
    clientePoupanca.contaPoupanca = new ContaPoupanca("002", "111", 0.01);
    clientePoupanca.contaPoupanca.depositar(new Credito(1000, new Date("1111,11,11")));
    console.log("Cliente " +
        clienteCorrente.nome +
        " Seu saldo é de R$: " +
        clienteCorrente.contaCorrente.calcularSaldo());
    console.log("Cliente " +
        clientePoupanca.nome +
        " Seu saldo é de R$: " +
        clientePoupanca.contaPoupanca.calcularSaldo());
    clienteCorrente.contaCorrente.transferir(clientePoupanca.contaPoupanca, 500);
    console.log("Cliente " +
        clienteCorrente.nome +
        " Seu saldo é de R$: " +
        clienteCorrente.contaCorrente.calcularSaldo());
    console.log("Cliente " +
        clientePoupanca.nome +
        " Seu saldo é de R$: " +
        clientePoupanca.contaPoupanca.calcularSaldo());
}
