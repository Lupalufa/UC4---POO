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

    verificarSeries(numeroDeSerie){
        const serie = quantidadeNotebook.find(serie =>
            serie.getNumeroDeSerie === numeroDeSerie
        )
        if(!serie){
            console.log("Notebook não encontrado", numeroDeSerie);
            return
        }
        console.log("Notebook encontrado:")
        console.table([serie])
        return serie
    }

    editarNotebook(numeroDeSerie, novosDados){
        try {
            const novoNotebook = quantidadeNotebook.find(n => n.getNumeroDeSerie === numeroDeSerie)
            if(novoNotebook){
            if(novosDados.marca){
                novoNotebook.marca = novosDados.marca
            }
            if(novosDados.modelo){
                novoNotebook.modelo = novosDados.modelo
            }
            if(novosDados.cor){
                novoNotebook.cor = novosDados.cor
            }
            if(novosDados.preco){
                novoNotebook.setPreco = novosDados.preco
            }
            novoNotebook.getInfo();
            const notebook = this.verificarSeries(numeroDeSerie)
            if(notebook){
                const index = quantidadeNotebook.findIndex(n => n.getNumeroDeSerie === numeroDeSerie);
                quantidadeNotebook[index] = novoNotebook
            }
            ;}
        } catch (error) {
            console.error("Não foi possivel editar esse notebook", error.message)
        }
    }

    excluirTodosOsNotebook(){
        try {
            if(quantidadeNotebook.length > 0){
                 quantidadeNotebook.length = 0;
                 console.log("Todos os notebooks apagados com sucesso")
            }
         } catch (error) {
             console.error("Erro ao excluir o banco.", error.message);
         }
    }



}

module.exports = { ControllerNotebook }

