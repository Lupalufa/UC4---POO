const { Veiculo } = require("../models/Veiculo")
const { Carro } = require("../models/Carro")
const { Moto } = require("../models/Moto")
const bancoVeiculo = []

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
}

module.exports = { VeiculoController }