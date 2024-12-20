const prompt = require("prompt-sync")();
const { Pedido } = require("./pedido")
const { Produto } = require("./produto")

function adicionarProdutosAoPedido(){
    while(true){
        const nome = prompt("Digite o nome do produto (ou 'sair' para finalizar)")
        if (nome.toLowerCase() === 'sair') break;
        const preco = parseFloat(prompt("Digite o preço do produto;"))
        if(isNaN(preco) || preco <= 0){
            console.log("Preço invalido. Tente novamento")
            continue;
        }
        const produto = new Produto(nome,preco)
        Pedido.adicionarProduto(produto)
        console.log(`Produto "${produto.getNome} adicionado com sucesso!`)
    }
    Pedido.mostrarPedido()
}

adicionarProdutosAoPedido()

