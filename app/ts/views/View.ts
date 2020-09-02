abstract class View<T> {
    protected _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    abstract template(model: T) : string;
    abstract update(selector: T) : void;
}