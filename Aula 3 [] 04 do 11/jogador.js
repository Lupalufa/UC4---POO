class Jogador {
    #nome
    #aposta
    constructor(nome,aposta){
        this.#nome = nome
        this.#aposta = aposta
    }

    get getNome(){
        return this.#nome
    }
    
    set setNome(nome){
        this.#nome = nome
    }

    get getAposta(){
        return this.#aposta
    }

    set setAposta(aposta){
        this.#aposta = aposta
    }

    apresentarDados(){
        console.log(`Nome do jogador: ${this.getNome} e o numero da aposta: ${this.getAposta}`)
    }
}

module.exports = { Jogador }

let jogador1 = new Jogador("Pedin Do Grau", 5)

jogador1.apresentarDados()
