const { Veiculo } = require("../models/Veiculo")
const { Carro } = require("../models/Carro")
const { Moto } = require("../models/Moto")
const { bancoVeiculo } = require("../config/banco")


class VeiculoController {

    criarVeiculo(tipo, ano, marca, modelo, cor){
        let veiculo;
        try{
        if(tipo.toLowerCase() === 'carro'){
            veiculo = new Carro(ano,marca,modelo,cor)
        }
        else if(tipo.toLowerCase() === 'moto'){
            veiculo = new Moto(ano,marca,modelo,cor)
        }
        else if(tipo.toLowerCase() === 'veiculo'){
            veiculo = new Veiculo(ano,marca)
        }
        else{
            console.log("Tipo de Veículo inválido")
            return;
        }}
        catch (error){
            console.error("Não foi possivel efetuar a operação",error.message)
        }
        bancoVeiculo.push(veiculo)
        console.log("Veiculo cadastrado com sucesso!!!")
    }
    listarVeiculos(){
        if(bancoVeiculo.length > 0){
            console.log("==== Veículos Registrados ====")
            bancoVeiculo.forEach((veiculo, index) => {
                console.log(`${index + 1}`);
                veiculo.getInfo();
                veiculo.calcularValor();
            })
        }
        else {
            console.log("Nenhum veiculo registrado!")
        }
    }
    buscarId(indice){
        if(bancoVeiculo.length >= indice - 1){
            return true;
        }
        return false
    }

    editarVeiculo(indice, novosDados){
        try {
                const novoVeiculo = bancoVeiculo[indice - 1]
                if(novosDados.ano){
                    novoVeiculo.setAno = novosDados.ano 
                }
                if(novosDados.marca){
                    novoVeiculo.setMarca = novosDados.marca
                }
                if(novosDados.modelo){
                    novoVeiculo.setModelo = novosDados.modelo
                }
                if(novosDados.cor){
                    novoVeiculo.setCor = novosDados.cor 
                }
                console.log("Veiculo Atualizado com sucesso")
                novoVeiculo.getInfo();
                bancoVeiculo[indice - 1] = novoVeiculo;

        } catch (error) {
            
        }
    }


    excluirVeiculo(){

    }
}

module.exports = { VeiculoController }