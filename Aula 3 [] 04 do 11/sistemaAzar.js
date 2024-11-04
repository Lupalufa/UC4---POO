const { Dado } = require("./dado")
const { Jogador } = require("./jogador")

class SistemaDeAzar {
    constructor(Dado,Jogador){
        this.Dado = Dado
        this.Jogador = Jogador
    }

    verificarGanhador(Dado, Jogador){
        function verificar(min, max) {
            return Math.random() * (max - min) + min;
        }
        if (verificar === Dado){
            return "Parabens!! Você ganhou"
        }
        else {
            return "Você perdeu, Que pena"
        }
    }
    get getJogador(){
        return this.Jogador = Jogador
    }

    set setJogador(Jogador){
        this.Jogador = Jogador
    }

    get getDado(){
        return this.Dado = Dado
    }

    set setDado(Dado){
        this.Dado = Dado
    }
}

module.exports = { SistemaDeAzar }