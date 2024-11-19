const prompt = require("prompt-sync")();
const {TarefaController} = require("../controller/tarefaController")

const controller = new TarefaController()

function exibirMenu() {
    console.log("================================")
    console.log("0° - Sair do sistema")
    console.log("1° - Criar Tarefas")
    console.log("2° - Listar Tarefas")
    console.log("3° - Listar Tarefas Pessoais")
    console.log("4° - Listar Tarefas Profissionais")
    console.log("5° - Editar Tarefas")
    console.log("6° - Excluir Tarefas")
    console.log("7° - Excluir Todas as Tarefas")
    console.log("================================")
}

function inciarSistema() {
    let opcao;
    do{
        exibirMenu()
    opcao = parseInt(prompt("Digite uma opção de 0 a 6: "))
    
    switch (opcao) {
        case 0:
            console.log("Saindo do Sistema...")
        break;
        case 1:
            adicionarTarefas()
        break;
        case 2:
            listarTarefa()
        break;
        case 5:

        break;
        case 6:

        break;
        default:
            break;
    }
  }while(opcao != 0)
}



function adicionarTarefas() {
    const id = prompt("O tipo da Tarefa é Tarefas/TarefasPS/TarefasPF: ")
    const descricao = prompt("Digite uma descrição da tarefa apresentada: ")
    const status = this.getStatus
    const prioridade = prompt("Prioridade Alta/Media/Baixa?: ")
    const data = prompt("Dê uma data desejada: ")

    controller.adicionarTarefa(id,descricao,status,prioridade,data)
}

function listarTarefa() {
    const id = prompt("Diga o tipo de tarefa: ")
    
    controller.listarTarefas(id)
}

inciarSistema()
