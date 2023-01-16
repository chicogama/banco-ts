//classe de créditos para uma conta
export class Credito {
    constructor(valor, data) {
        this._valor = valor;
        this._data = data;
    }
    //Gets e Seters
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
    }
}
