const {Animal} = require("./animais")

class Cachorro extends Animal {
    #raca
    constructor(raca){
        super() // super() = serve para trazer todos os atributos da classe pai para a classe filha
        this.#raca = raca
    }

    emitirSom(){
        console.log(`${this.getNome} Faz au au`)
    }
}

module.exports = {Cachorro}