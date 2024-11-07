const {Conta} = require("./Conta")


class Poupanca extends Conta {
    #taxaJuros

    constructor(titular,taxaJuros){
        super(titular)
        this.#taxaJuros = taxaJuros
    }

    get getTaxaJuros(){
        return this.#taxaJuros;
    }

    set setTaxaJuros(taxa){
        this.#taxaJuros = taxa
    }

    atualizarRendimentos(){
        const juros = this.getSaldo * (this.#taxaJuros / 100)
        this.setSaldo = juros
    }

}

module.exports = { Poupanca }