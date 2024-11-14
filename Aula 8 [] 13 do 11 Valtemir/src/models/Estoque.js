const { Notebook } = require("./Notebook")

class Estoque {
    #id
    quantidade
    produtos
    constructor(id, quantidade,produtos){
        try {
            if(produto instanceof Notebook)
            this.#id = id
            this.quantidade = quantidade
            this.produtos = produtos
        } catch (error) {
            
        }
    }

    get getId(){
        return this.#id
    }

    set setId(novoID){
        this.#id = novoID
    }
}

module.exports = { Estoque }