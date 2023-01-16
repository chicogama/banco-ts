import { ContaCorrente } from "../models/contacorrente";
import { Credito } from "../models/conta/credito";
import { Endereco } from "../models/pessoa/endereco.js";
import { Cliente } from "../models/cliente";
import { ContaPoupanca } from "../models/contapoupanca";

export function app4() {
    const clienteCorrente = new Cliente(
        "12309332733",
        "Josemar Gama",
        "96991228882",
        true,
        new Endereco(
            "68903310",
            "Av. Orlando Dias",
            "992",
            "N/A",
            "Macapá",
            "Amapá"
        )
    );

    /*     clienteCorrente.contaCorrente = new ContaCorrente("001", "222", 500);
    clienteCorrente.contaCorrente.depositar(new Credito(1000, new Date()));

    const clientePoupanca = new Cliente(
        "44509876411",
        "ChicoGama",
        "96991277292",
        true,
        new Endereco(
            "68900000",
            "Av. São José",
            "123",
            "N/A",
            "Santana",
            "Amapá"
        )
    );

    clientePoupanca.contaPoupanca = new ContaPoupanca("002", "111", 0.01);
    clientePoupanca.contaPoupanca.depositar(
        new Credito(1000, new Date("1111,11,11"))
    );

    console.log(
        "Cliente " +
            clienteCorrente.nome +
            " Seu saldo é de R$: " +
            clienteCorrente.contaCorrente.calcularSaldo()
    );

    console.log(
        "Cliente " +
            clientePoupanca.nome +
            " Seu saldo é de R$: " +
            clientePoupanca.contaPoupanca.calcularSaldo()
    );

    clienteCorrente.contaCorrente.transferir(
        clientePoupanca.contaPoupanca,
        500
    );

    console.log(
        "Cliente " +
            clienteCorrente.nome +
            " Seu saldo é de R$: " +
            clienteCorrente.contaCorrente.calcularSaldo()
    );

    console.log(
        "Cliente " +
            clientePoupanca.nome +
            " Seu saldo é de R$: " +
            clientePoupanca.contaPoupanca.calcularSaldo()
    ); */
}
