class Animal{
    #nome;
    #idade;
    #pelagem;
    constructor(nome,idade,pelagem){
        this.#nome = nome
        this.#idade = idade
        this.#pelagem = pelagem
    }

    emitirSom(){
        console.log(`${this.#nome} emite um som`)
    }
    get getNome(){
        return this.#nome
    }
}

module.exports = {Animal}