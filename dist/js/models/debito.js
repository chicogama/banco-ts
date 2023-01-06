export class Debito {
    constructor(valor, data) {
        this._valor = valor;
        this._data = data;
    }
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
