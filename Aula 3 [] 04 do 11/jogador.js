class Jogador {
    #nome
    #aposta
    constructor(nome,aposta){
        this.#nome = nome
        this.#aposta = aposta
    }

    get getNome(){
        return this.#nome = nome
    }
    
    set setNome(nome){
        this.#nome = nome
    }

    get getAposta(){
        return this.#aposta = aposta
    }

    set setAposta(aposta){
        this.#aposta = aposta
    }
}

module.exports = { Jogador }