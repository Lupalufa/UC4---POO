const {Animal} = require("./animais")

class Cachorro extends Animal {
    #raca
    constructor(nome,idade,pelagem,raca){
        super(nome,idade,pelagem) // super() = serve para trazer todos os atributos da classe pai para a classe filha
        this.#raca = raca
    }

    emitirSom(){
        console.log(`Meu nome é ${this.getNome},e sou da Raça ${this.#raca} e eu emito um som au au`)
    }
    

}
module.exports = {Cachorro}