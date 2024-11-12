const prompt = require("prompt-sync")();
const { VeiculoController } = require("../controller/veiculoController")
const Controller = new VeiculoController()

function exibirMenu(){
    console.log("======================")
    console.log("1° - Adicionar Veiculo")
    console.log("2° - listar Veiculos")
    console.log("3° - Editar Veiculos")
    console.log("4° - Excluir Veiculo")
    console.log("0° - Sair do sistema ")
    console.log("======================")
}

function iniciarSistema(){
    let opcao;
    do{
        exibirMenu()
        opcao = parseInt(prompt("Digite uma opção de 0 a 4:"))
        switch (opcao) {
            case 0:
                console.log("Saindo do sistema...")
                break;
            case 1:
                adicionarVeiculos()
                break;
            case 2:
                Controller.listarVeiculos()
                break;
            case 3:
                editarVeiculos()
                break;
            case 4:
                excluirVeiculos()
                break;
            default:
                console.log("Opção inválido")
        }
    }while(opcao !== 0)
}

function adicionarVeiculos() {
    const tipo = prompt("Digite o tipo de veículo (Carro/Moto/Veículo):")
    const marca = prompt("Digite a marca do veículo:")
    const ano = parseInt(prompt("Digite o Ano do veiculo:"))
    const cor = prompt("Digite a cor do veículo:")
    const modelo = prompt("Digite o modelo do veículo:")

    Controller.criarVeiculo(tipo,ano,marca,modelo,cor)
}

function editarVeiculos() {
    Controller.listarVeiculos()
    const indice = parseInt(prompt("Digite o indice desejado: "))
    const result = Controller.buscarId(indice) 
    if(result){
        console.log("informe os novos dados (pressione Enter para manter o valor atual)")
        const ano = prompt("Novo Ano:")
        const marca = prompt("Nova Marca:")
        const modelo = prompt("Novo modelo:")
        const cor = prompt ("Nova cor:")
        const novosDados = {}
        if(ano) novosDados.ano = ano
        if(marca) novosDados.marca = marca
        if(modelo) novosDados.modelo = modelo
        if(cor) novosDados.cor = cor
        Controller.editarVeiculo(indice, novosDados)
    }
    else{
        console.log("Informe um indice valido")
    }
}

// excluirVeiculos() {

// }

iniciarSistema()

