class Notebook {
    #numeroDeSerie
    marca
    modelo
    cor
    #preco
    constructor(numeroDeSerie,marca,modelo,cor,preco){
        this.#numeroDeSerie = numeroDeSerie
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.#preco = preco
    }
    get getMarca(){
        return this.marca
    }

    get getModelo(){
        return this.modelo
    }
    get getCor(){
        return this.cor
    }
    get getPreco(){
        return this.preco
    }

    get getNumeroDeSerie(){
        return this.#numeroDeSerie
    }
    set setNumeroDeSerie(novoNumeroDeSerie){
        this.#numeroDeSerie = novoNumeroDeSerie
    }
    get getPreco(){
        return this.#preco
    }
    set setPreco(novoPreco){
        this.#preco = novoPreco
    }

    getInfo(){
        console.log (`Numero de Serie: ${this.getNumeroDeSerie}, Marca: ${this.getMarca}, Modelo: ${this.getModelo}, Cor: ${this.getCor}, Preço: ${this.getPreco}`)
    }
}

module.exports = { Notebook }