const { Animal } = require("./animal")

class Mamifero extends Animal {
    #tipoPelo;
    #habitat;
    constructor(nome,idade,tipoPelo,habitat){   
        super(nome,idade)
        this.#tipoPelo = tipoPelo
        this.#habitat = habitat
    }
    get getTipoPelo(){
        return this.#tipoPelo
    }
    set setTipoPelo(valor){ 
        this.#tipoPelo = valor
    }
    get getHabitat(){
        return this.#habitat
    }
    set setHabitat(valor){
        this.#habitat = valor
    }
    emitirSom(){
        console.log("O mamífero ruge ou grunhe")
    }
    getInfo(){
       return `Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo de pelo: ${this.getTipoPelo},Habitat: ${this.getHabitat}`
    }
}


module.exports = { Mamifero }