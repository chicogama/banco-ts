import { Cliente } from "../models/class/cliente.js";
import { Endereco } from "../models/endereco.js";

export function app2() {
    const cliente = new Cliente(
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

    console.log("Autenticado?: " + cliente.autenticar());

    cliente.adicinaEndereco(
        new Endereco(
            "68900000",
            "Av. São José",
            "123",
            "N/A",
            "Santana",
            "Amapá"
        )
    );
    cliente.adicinaEndereco(
        new Endereco(
            "68900222",
            "Av. Fab",
            "773",
            "Apt. 22",
            "Mazagão",
            "Amapá"
        )
    );
    cliente.listarEndereço();
}
