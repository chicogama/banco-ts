import { Cliente } from "../models/cliente.js";
import { Endereco } from "../models/pessoa/endereco.js";
import { ContaPoupanca } from "../models/contapoupanca.js";
import { Credito } from "../models/conta/credito.js";
import { Debito } from "../models/conta/debito.js";

export function app5() {
    const clientePoupanca = new Cliente(
        "44509876411",
        "Josemar Gama",
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

    const contaPoupanca = new ContaPoupanca("002", "111", 0.01);

    clientePoupanca.adicionarConta(contaPoupanca);

    //Depósitos na conta poupança
    contaPoupanca.depositar(new Credito(200, new Date("2022,01,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,01,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,02,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,03,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,04,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,05,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,06,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,07,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,08,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,09,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,10,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,11,01")));
    contaPoupanca.depositar(new Credito(200, new Date("2022,12,01")));

    //saques da conta Poupança
    contaPoupanca.sacar(new Debito(100, new Date("2022,03,05")));
    contaPoupanca.sacar(new Debito(200, new Date("2022,07,08")));

    console.log(
        "Cliente " +
            clientePoupanca.nome +
            " Seu saldo é de R$: " +
            contaPoupanca.calcularSaldo() +
            contaPoupanca.calcularRedimento()
    );
}
