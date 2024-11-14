const prompt = require("prompt-sync")();
const {ControllerNotebook} = require("../controller/ControllerNotebook");
const { Notebook } = require("../models/Notebook");
const controller = new ControllerNotebook()

function exibirMenu(){
    console.log("======================")
    console.log("1° - Adicionar Notebook")
    console.log("2° - listar Notebooks")
    console.log("3° - Editar Notebooks")
    console.log("4° - Excluir Notebooks")
    console.log("5° - Excluir Todos Notebooks")
    console.log("6° - Consultar Clientes PJ")
    console.log("7° - Consultar Clientes PF")
    console.log("0° - Sair do sistema ")
    console.log("======================")
}

function iniciarSistema(){
    let opcao;
    do{
        exibirMenu()
        opcao = parseInt(prompt("Digite uma opção de 0 a 6:"))
        let numeroDeSerie;
        switch (opcao) {
            case 0:
                console.log("Saindo do sistema...")
                break;
            case 1:
                numeroDeSerie = prompt("Digite o numero de serie:")
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
                editarNotebooks()
                break;
            case 4:
                
                break;
            case 5:
                controller.excluirTodosOsNotebook()
                break;
            default:
                console.log("Opção inválido")
        }
    }while(opcao !== 0)
}

function editarNotebooks(){
    try{
    controller.listarNotebook()
    numeroDeSerie = prompt("Digite o Numero de serie:")
    const verificarSerie = controller.verificarSeries(numeroDeSerie)
    if(verificarSerie){
        console.log("Informe os novos Dados como Solicitados")
        const marca = prompt("Nova Marca:")
        const modelo = prompt("Novo Modelo:")
        const cor = prompt("Nova cor:")
        const preco = parseFloat(prompt("Novo Preço:"))
        const novosDados = {}
        if(marca) novosDados.marca = marca
        if(modelo) novosDados.modelo = modelo
        if(cor) novosDados.cor = cor
        if(preco) novosDados.preco = preco
        controller.editarNotebook(numeroDeSerie, novosDados)
    }
    else{
        console.log("Informe um Numero de Serie Válido")
    }
}
    catch(error){
        console.error("Não foi possivel editar esse notebook", error.message)
    }
}


iniciarSistema()
