const { Animal } = require("./animal")

class Ave extends Animal {
    #tipoBico
    #capacidadeVoo
    constructor(nome,idade,tipoBico,capacidadeVoo){
        super(nome,idade)
        this.#tipoBico = tipoBico
        this.#capacidadeVoo = capacidadeVoo
    }
    get getTipoBico(){
        return this.#tipoBico
    }
    set setTipoBico(valor){
        this.#tipoBico = valor
    }
    get getCapacidadeVoo(){
        return this.#capacidadeVoo
    }
    set setCapacidadeVoo(valor){
        this.#capacidadeVoo = valor
    }
    emitirSom(){
        console.log("A ave canta ou pia")
    }
    getInfo(){
         return `Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo do bico: ${this.getTipoBico}, Capacidade do voo: ${this.getCapacidadeVoo}`
    }
}

module.exports = { Ave }