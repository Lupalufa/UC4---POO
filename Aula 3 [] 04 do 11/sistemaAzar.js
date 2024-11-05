const { Dado } = require("./dado")
const { Jogador } = require("./jogador")

class SistemaDeAzar {
    #dado;
    #jogador;
    constructor(dado,jogador){
        try {
            if(dado instanceof Dado && jogador instanceof Jogador){
                this.#dado = dado;
                this.#jogador = jogador;
            }
            else{
                console.log("Os dados fornecidos não são do Tipo Jogador ou Dado")
            }
            Object.freeze(this);
            
        } catch (error) {
            console.error("Os dados fornecidos não são do Tipo Jogador ou Dado",error.message)
        }
    }
    get getJogador(){
        return this.#jogador
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
    verificarGanhador(){
        if(this.#dado.getFace === this.#jogador.getAposta){
            console.log(`Parabéns você ganhou ${this.#jogador} O resultado foi: ${this.#dado.getFace}`)
            this.#jogador.apresentarDados()
        }
        else{
            console.log(`Que pena! Tentemos uma nova aposta ok? Resultado do Sistema azar: ${this.#dado.getFace}`)
        }
    }


}

module.exports = { SistemaDeAzar }