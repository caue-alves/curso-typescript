class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao : Negociacao) : void{
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}