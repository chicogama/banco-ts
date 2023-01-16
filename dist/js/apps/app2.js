import { Cliente } from "../models/cliente.js";
import { Endereco } from "../models/pessoa/endereco.js";
export function app2() {
    const cliente = new Cliente("12309332733", "Josemar Gama", "96991228882", true, new Endereco("68903310", "Av. Orlando Dias", "992", "N/A", "Macapá", "Amapá"));
    console.log("Cliente: " + cliente.nome);
    console.log("Autenticado?: " + cliente.autenticar());
    cliente.adicionarEndereco(new Endereco("68900000", "Av. São José", "123", "N/A", "Santana", "Amapá"));
    cliente.adicionarEndereco(new Endereco("68900222", "Av. Fab", "773", "Apt. 22", "Mazagão", "Amapá"));
    cliente.listarEndereço();
}
