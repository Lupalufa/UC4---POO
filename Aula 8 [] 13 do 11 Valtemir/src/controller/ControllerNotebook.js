const { quantidadeNotebook } = require("../config/databaseNotebook")
const { Notebook } = require("../models/Notebook")

class ControllerNotebook {
    
    criarNotebook(numeroDeSerie,marca,modelo,cor,preco){
        try {
            let novoNotebook
            novoNotebook = new Notebook(numeroDeSerie,marca,modelo,cor,preco)
            quantidadeNotebook.push(novoNotebook)
            console.log("Cadastro do Notebook efetuado com sucesso")
            return novoNotebook
            
        } catch (error) {
            console.error("Não foi possivel criar esse notebook", error.message)
        }
    }

    listarNotebook(){
        if(quantidadeNotebook.length > 0){
            console.log(" ==== Notebooks Registrados ====")
            quantidadeNotebook.forEach((notebook, numeroDeSerie) => {
                console.log(`${numeroDeSerie + 1}`)
                notebook.getInfo()
            })
        }
        else{
            console.log("Nenhum Notebook encontrado")
        }
    }

    editarNotebook(numeroDeSerie, novosDados){

    }

    excluirNotebook(){
        
    }

}

module.exports = { ControllerNotebook }

