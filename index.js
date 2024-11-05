const prompt = require("prompt-sync")();
// =============================================================================================================================

// Aula 2 do dia 30 do 10 de 2024

// const { Pedido } = require("./pedido")
// const { Produto } = require("./produto")

// function adicionarProdutosAoPedido(){
//     while(true){
//         const nome = prompt("Digite o nome do produto (ou 'sair' para finalizar)")
//         if (nome.toLowerCase() === 'sair') break;
//         const preco = parseFloat(prompt("Digite o preço do produto;"))
//         if(isNaN(preco) || preco <= 0){
//             console.log("Preço invalido. Tente novamento")
//             continue;
//         }
//         const produto = new Produto(nome,preco)
//         Pedido.adicionarProduto(produto)
//         console.log(`Produto "${produto.getNome} adicionado com sucesso!`)
//     }
//     Pedido.mostrarPedido()
// }

// adicionarProdutosAoPedido()
// ==========================================================================================================================

// Aula 3 do dia 04 do 11 de 2024

// const {Dado} = require("./Aula 3 [] 04 do 11/dado")
// const {Jogador} = require("./Aula 3 [] 04 do 11/jogador")
// const {SistemaDeAzar} = require("./Aula 3 [] 04 do 11/sistemaAzar")

// function executar() {
//     let novoTurno;
//     console.log("Bem vindo ao Sistema de Azar 1.0.0")
// do{
//     const nome = prompt("Qual o nome do jogador:");
//     const aposta = parseInt(prompt("Digite um valor de 1 a 6:"))
//     const lance = new Dado();
//     const jogador01 = new Jogador(nome, aposta);
//     const tigrinho = new SistemaDeAzar(lance,jogador01);
//     tigrinho.verificarGanhador();
//     const novoTurno = prompt("Digite sim para uma nova aposta ou não para sair")

// }while(novoTurno !== "n");

// }

// executar()

// ======================================================================================================================

// Aula 04 do dia 05 do 11 de 2024

const { Animal } = require('./Aula 4 [] 05 do 11/animais')
const { Cachorro } =  require("./Aula 4 [] 05 do 11/cachorro")


let a1 = new Animal("Joel", 14, "marrom")
let c1 = new Cachorro("SRD","Joel",15,"Preto")

