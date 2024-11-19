const { Tarefas } = require("./tarefas")

class TarefasPessoais extends Tarefas {
    #prioridade
    #data
    constructor(descricao, status, prioridade, data){
        super(descricao,status)
        this.#prioridade = prioridade
        this.#data = data
    }

    get getPrioridade(){
        return this.#prioridade
    }
    set setPrioridade(valor){
        this.#prioridade = valor
    }
    get getData(){
        return this.#data
    }
    set setData(valor){
        this.#data = valor
    }

    getInfo(){
        return `Descrição: ${this.getDescricao}, Status: ${this.getStatus}, Prioridade: ${this.#prioridade}, Data: ${this.#data}`
    }
}

module.exports = { TarefasPessoais }