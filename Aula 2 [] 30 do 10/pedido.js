const { Produto } = require("./produto")

class Pedido{
    #produtos
    constructor(){
        this.#produtos = []
        Object.freeze(this)
    }
    adicionarProduto(novoProduto){
        try {
            novoProduto instanceof Produto
            this.#produtos.push(novoProduto)
        } catch (error) {
            console.error("Erro ao adicionar o produto",error.message)
        }
    }
    calcularTotal(){
        try {
         return this.#produtos.reduce((total,produto) =>
             total + produto.getPreco, 0)   
        } catch (error) {
            console.error("Erro ao calcular os pedidos adicionados",error.message)
        }
    }
    mostrarPedidos(){
        try {
            this.#produtos.forEach(produto => {
                console.table(produto.getInfoProduto())
            })

            console.log(`total = ${this.calcularTotal()}`)
        } catch (error) {
            console.error("Erro ao Mostrar os pedidos adicionados",error.message)
        }
    }}

module.exports = { Pedido }