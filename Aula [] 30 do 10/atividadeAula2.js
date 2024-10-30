class Produto{
    #nome;
    #preco;
    constructor(nome,preco){
        this.#nome = nome
        this.#preco = preco
        Object.freeze(this)
    }

    get getNome(){
        return this.#nome
    }

    set setNome(nome){
        this.#nome = nome
    }

    get getPreco(){
        return this.#preco
    }

    set setPreco(preco){
        this.#preco = preco
    }

    get getInfoProduto(){
        return `${this.#nome} - R$ ${this.#preco}`
    }
}

class Pedido{
    #produtos
    constructor(){
        this.#produtos = []
        Object.freeze(this)
    }
    adicionarProduto(nome,preco){
        const novoProduto = {
            nome,
            preco,
        }
        try {
            this.#produtos.push(novoProduto)
        } catch (error) {
            console.error("Erro ao adicionar o produto",error.message)
        }
    }
    calcularTotal(){
        try {
            
        } catch (error) {
            
        }
    }
    mostrarPedidos(){
        try {
            console.table(this.#produtos)
        } catch (error) {
            console.error("Erro ao Mostrar os pedidos adicionados",error.message)
        }
    }
}

module.exports = {Pedido, Produto}