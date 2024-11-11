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

// const { Animal } = require('./Aula 4 [] 05 do 11/animais')
// const { Cachorro } =  require("./Aula 4 [] 05 do 11/cachorro")


// let a1 = new Animal("Joel", 14, "marrom")
// let c1 = new Cachorro("Joel","SRD",15,"Preto")

// c1.emitirSom()
// a1.emitirSom()

// ================================================================================================================

// Aula 5 do dia 06 do 11 de 2024

// const {Conta} = require("./Aula 5 [] 06 do 11/Conta")
// const {Poupanca} = require("./Aula 5 [] 06 do 11/ContaPoupanca")

// const minhaPoupanca = new Poupanca("Jorel", 5)
// console.log(minhaPoupanca.getSaldo)
// minhaPoupanca.setSaldo = 5000

// minhaPoupanca.atualizarRendimentos(90000)

// minhaPoupanca.sacar(1000)

// console.log(minhaPoupanca.getSaldo)


// ================================================================================================

// Aula 6 do dia 07 do 11 de 2024

// const {Animal} = require("./Aula 6 [] 07 do 11/animal")
// const {Ave} = require("./Aula 6 [] 07 do 11/ave")
// const {Mamifero} = require("./Aula 6 [] 07 do 11/mamifero")

// const pessoa1 = new Animal("Pedro Lucas",20)
// console.log(pessoa1.getInfo())
// pessoa1.emitirSom()

// const cachorro1 = new Mamifero("Julios",3,"Dourado","casa")
// console.log(cachorro1.getInfo())
// cachorro1.emitirSom()

// const galinha1 = new Ave("Jubileuda",2,"Cônico","Não tem")

// console.log(galinha1.getInfo())
// galinha1.emitirSom()

// ================================================================================================

