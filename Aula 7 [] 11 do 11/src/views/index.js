const prompt = require("prompt-sync")();
const { VeiculoController } = require("../controller/veiculoController")
const Controller = new VeiculoController()

function exibirMenu(){
    console.log("======================")
    console.log("1° - Adicionar Veiculo")
    console.log("2° - listar Veiculos")
    console.log("3° - Sair")
    console.log("======================")
}

function iniciarSistema(){
    let opcao;
    do{
        exibirMenu()
        opcao = parseInt(prompt("Digite uma opção:"))
        switch (opcao) {
            case 1:
                adicionarVeiculos()
                break;
            case 2:
                Controller.listarVeiculos()
                break;
            case 3:
                console.log("Saindo do sistema...")
            default:
                console.log("Opção inválido")
        }
    }while(opcao !== 3)
}

function adicionarVeiculos() {
    const tipo = prompt("Digite o tipo de veículo (Carro/Moto/Veículo):")
    const marca = prompt("Digite a marca do veículo:")
    const ano = parseInt(prompt("Digite o Ano do veiculo:"))
    const cor = prompt("Digite a cor do veículo:")
    const modelo = prompt("Digite o modelo do veículo:")

    Controller.criarVeiculo(tipo,ano,marca,modelo,cor)
}

iniciarSistema()

