class Tarefas {
    #descricao
    #status
    constructor(descricao,status){
        this.#descricao = descricao
        this.#status = "Não finalizado"
        Object.freeze(this)
    }

    get getDescricao(){
        return this.#descricao
    }

    set setDescricao(valor){
        this.#descricao = valor
    }

    get getStatus(){
        return this.#status
    }

    getInfo(){
        return `Descrição: ${this.getDescricao}, Status: ${this.getStatus}`
    }

    finalizarTarefa(){
        this.#status = "Finalizado"
        console.log("Tarefa Finalizada com Sucesso")
    }
}

module.exports = { Tarefas }