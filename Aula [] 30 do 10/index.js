const prompt = require("prompt-sync")

const { Pedido } = require("./atividadeAula2")
const { Produto } = require("./atividadeAula2")

const novalista = new Pedido();
novalista.adicionarProduto("cenoura",6)
novalista.adicionarProduto("Batata",25)
novalista.calcularTotal()


