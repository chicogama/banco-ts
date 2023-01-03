export class Endereco {
    private _cep: String;
    private _logradouro: String;
    private _numero: String;
    private _complemento: String;
    private _cidade: String;
    private _uf: String;

    constructor(
        cep: String,
        logradoro: String,
        numero: String,
        complemento: String,
        cidade: String,
        uf: String
    ) {
        this._cep = cep;
        this._logradouro = logradoro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }
}
