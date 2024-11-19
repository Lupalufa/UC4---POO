const { dataBaseTarefas } = require("../config/databaseTarefas")
const { Tarefas } = require("../models/tarefas")
const { TarefasPessoais } = require("../models/tarefasPessoais")
const { TarefasProfissionais } =  require("../models/terafasProfissionais")

class TarefaController {

    adicionarTarefa(id, descricao, status, prioridade, data){
        let tarefa;
        try {
            if(id.toLowerCase() === 'tarefasps'){
                tarefa = new TarefasPessoais(descricao,status, prioridade,data)
            }
            else if(id.toLowerCase() === 'tarefaspf'){
                tarefa = new TarefasProfissionais(descricao,status, prioridade,data)
            }
            else if(id.toLowerCase() === 'tarefas'){
                tarefa = new Tarefas(descricao, status) 
               }
            else{
                console.log("Tipo de Tarefa não reconhecida")
                return;
            }
        } catch (error) {
            console.error("Não foi possivel criar esta tarefa", error.message)
        }
        dataBaseTarefas.push(tarefa)
        console.log("Tarefa Cadastrada com sucesso!!!")
    }

    listarTarefas(id){
        try{
        if(id.toLowerCase === 'Tarefas'){
            console.log(" ==== Tarefas Registradas ====")
            dataBaseTarefas.forEach((tarefas, index) => {
                console.log(`${index + 1}`)
                tarefas.getInfo();
            });
        }
        else if(id.toLowerCase === 'TarefasPS'){
            console.log(" ==== Tarefas Registradas ====")
            dataBaseTarefas.forEach((tarefas, index) => {
                console.log(`${index + 1}`)
                tarefas.getInfo();
            });
        }
        else if(id.toLowerCase === 'TarefasPF'){
            console.log(" ==== Tarefas Registradas ====")
            dataBaseTarefas.forEach((tarefas, index) => {
                console.log(`${index + 1}`)
                tarefas.getInfo();
            });
        }
        else{
            console.log("Nenhuma Tarefa foi registrada!")
        }
    }catch(error){
        console.error("Não foi possivel listar esta tarefa", error.message)
    }
}
}

module.exports = { TarefaController }