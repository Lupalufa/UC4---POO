const prompt = require("prompt-sync")();
const {ControllerNotebook} = require("../controller/ControllerNotebook")
const controller = new ControllerNotebook()

function exibirMenu(){
    console.log("======================")
    console.log("1° - Adicionar Notebook")
    console.log("2° - listar Notebooks")
    console.log("3° - Editar Notebooks")
    console.log("4° - Excluir Notebooks")
    console.log("5° - Consultar Clientes PJ")
    console.log("6° - Consultar Clientes PF")
    console.log("0° - Sair do sistema ")
    console.log("======================")
}

function iniciarSistema(){
    let opcao;
    do{
        exibirMenu()
        opcao = parseInt(prompt("Digite uma opção de 0 a 6:"))
        switch (opcao) {
            case 0:
                console.log("Saindo do sistema...")
                break;
            case 1:
                let numeroDeSerie = prompt("Digite o numero de serie:")
                let marca = prompt("Digite a marca do notebook:")
                let modelo = prompt("Digite o modelo do notebook:")
                let cor = prompt("Digite a cor do notebook:")
                let preco = prompt("Define o preço do notebook:")

                controller.criarNotebook(numeroDeSerie,marca,modelo,cor,preco)
                console.log("Parabens! Notebook criado com sucesso")
                break;
            case 2:
                controller.listarNotebook()
                break;
            case 3:
                editarNotebook()
                break;
            case 4:
                excluirNotebook()
                break;
            default:
                console.log("Opção inválido")
        }
    }while(opcao !== 0)
}


iniciarSistema()
