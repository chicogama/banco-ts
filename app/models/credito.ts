export class Credito {
    private _valor: Number;
    private _data: Date;

    constructor(valor: Number, data: Date) {
        this._valor = valor;
        this._data = data;
    }

    public get valor(): Number {
        return this._valor;
    }

    public set valor(value: Number) {
        this._valor = value;
    }

    public get data(): Date {
        return this._data;
    }

    public set data(value: Date) {
        this._data = value;
    }
}
