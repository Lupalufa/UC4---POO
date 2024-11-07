class Animal {
    #nome;
    #idade;
    constructor(nome,idade){
        this.#nome = nome
        this.#idade = idade
    }
    get getNome(){
        return this.#nome
    }
    set setNome(valor){
        this.#nome = valor
    }
    get getIdade(){
        return this.#idade
    }
    set setIdade(valor){
        this.#idade = idade
    }

    emitirSom(){
        console.log("O animal emite um som genérico")
    }
    getInfo(){
        return `Nome: ${this.getNome}, Idade: ${this.getIdade}`
    }
}

module.exports = { Animal }