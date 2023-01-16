//classe de créditos para uma conta
export class Credito {
    private _valor: number;
    private _data: Date;

    constructor(valor: number, data: Date) {
        this._valor = valor;
        this._data = data;
    }

    //Gets e Seters
    public get valor(): number {
        return this._valor;
    }

    public set valor(value: number) {
        this._valor = value;
    }

    public get data(): Date {
        return this._data;
    }

    public set data(value: Date) {
        this._data = value;
    }
}
