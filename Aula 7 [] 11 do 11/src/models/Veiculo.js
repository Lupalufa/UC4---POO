class Veiculo {
    #ano
    #marca
    constructor(ano,marca){
        this.#ano = ano
        this.#marca = marca
        Object.freeze(this)
    }

    get getAno(){
        return this.#ano
    }

    set setAno(valor){
        this.#ano = valor
    }

    get getMarca(){
        return this.#marca
    }

    set setMarca(valor){
        this.#marca = valor
    }

    getInfo(){
        console.log(`O ano do veiculo é ${this.getAno} e a marca do veiculo é ${this.#marca}`)
    }

    calcularValor(){
        try {
            throw new Error("Método CalcularValor() deve ser implementado.")
        } catch (error) {
            console.error("Não foi possivel calcular o valor", error.message)
        }
    }
}   
module.exports = { Veiculo }