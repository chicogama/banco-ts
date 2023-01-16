import { Cliente } from "../models/cliente";
import { Endereco } from "../models/pessoa/endereco";
import { ContaPoupanca } from "../models/contapoupanca";
import { Credito } from "../models/conta/credito";
import { Debito } from "../models/conta/debito";

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
    /* clientePoupanca.contaPoupanca = new ContaPoupanca("002", "111", 0.01);

    //Depósitos na conta poupança
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,01,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,01,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,02,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,03,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,04,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,05,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,06,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,07,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,08,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,09,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,10,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,11,01"))
    );
    clientePoupanca.contaPoupanca.depositar(
        new Credito(200, new Date("2022,12,01"))
    );

    //saques da conta Poupança
    clientePoupanca.contaPoupanca.sacar(
        new Debito(100, new Date("2022,03,05"))
    );
    clientePoupanca.contaPoupanca.sacar(
        new Debito(200, new Date("2022,07,08"))
    );

    console.log(
        "Cliente " +
            clientePoupanca.nome +
            " Seu saldo é de R$: " +
            clientePoupanca.contaPoupanca.calcularSaldo() +
            clientePoupanca.contaPoupanca.rendimentoConta()
    ); */
}
