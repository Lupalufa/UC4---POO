const { Veiculo } = require("./Veiculo")

class Moto extends Veiculo {
    #modelo
    #cor
    constructor(ano,marca,modelo,cor){
        super(ano,marca)
        this.#modelo = modelo
        this.#cor = cor
        Object.freeze(this)
    }
    get getCor(){
        return this.#cor
    }
    set setCor(valor){
        this.#cor = valor
    }
    get getModelo(){
        return this.#modelo
    }
    set setModelo(valor){
        this.#modelo = valor
    }

    getInfo(){
        console.log(`Marca: ${this.getMarca}, Ano: ${this.getAno}, Cor: ${this.getCor}, Modelo: ${this.getModelo}`)
    }
    
    calcularValor(){
        console.log(`Valor estimado do carro: R$ ${(2024 - this.getAno)* 10000}`)
    }
}

module.exports = { Moto }