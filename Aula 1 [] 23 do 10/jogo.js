class Jogo {
    constructor(titulo,genero,anoLancamento){
        this.titulo = titulo;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
    }
    getTitulo(){
        return this.titulo;
    }
    getGenero(){
        return this.genero;
    }
    getAnoLancamento(){
        return this.anoLancamento
    }

    setTitulo(titulo){
        this.titulo = titulo
    }
    setGenero(genero){
        this.genero = genero
    }
    setAnoLancamento(anoLancamento){
        this.anoLancamento = anoLancamento
    }

    exibirDados(){
        console.log(
            `
            Dados dos Jogos \n

            Título: ${this.titulo},
            Gênero: ${this.genero},
            Ano de Lançamento: ${this.anoLancamento},

            `
        )
    }
}

let jogos1 = new Jogo("Pókemon","RPG","1995")
let jogos2 = new Jogo("Valorant","Tiro Tático","2020")
let jogos3 = new Jogo("Dying Light","Survival Horror","2015")
jogos1.exibirDados()
jogos2.exibirDados()
jogos3.exibirDados()

