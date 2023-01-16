import { Endereco } from "../models/pessoa/endereco.js";
import { Cliente } from "../models/cliente";
export function app3() {
    const clienteCorrente = new Cliente("12309332733", "Josemar Gama", "96991228882", true, new Endereco("68903310", "Av. Orlando Dias", "992", "N/A", "Macapá", "Amapá"));
    /*
    clienteCorrente.contaCorrente = new ContaCorrente("123", "222", 400);
    console.log(clienteCorrente);

    clienteCorrente.contaCorrente.depositar(new Credito(100, new Date()));
    clienteCorrente.contaCorrente.depositar(new Credito(100, new Date()));
    clienteCorrente.contaCorrente.depositar(new Credito(100, new Date()));

    console.log(
        "Cliente " +
            clienteCorrente.nome +
            " Seu saldo é de R$: " +
            clienteCorrente.contaCorrente.calcularSaldo()
    ); */
}
