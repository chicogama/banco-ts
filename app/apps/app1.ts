import { Cargo } from "../models/cargo.js";
import { Funcionario } from "../models/funcionario.js";

export function app1() {
    const chico = new Funcionario(
        "12332112332",
        "ChicoGama",
        "1233131231",
        new Cargo("Gerente"),
        2000
    );

    const francisco = new Funcionario(
        "4569873412",
        "Francisco",
        "9119299922",
        new Cargo("Atendete"),
        5000
    );

    chico.funcionarioCargo(new Cargo("CEO"));
    francisco.funcionarioCargo(new Cargo("Vendedor"));

    console.log("Autenticado?: " + chico.autenticar());
    console.log(chico);
    console.log("Autenticado?: " + francisco.autenticar());
    console.log(francisco);
}
