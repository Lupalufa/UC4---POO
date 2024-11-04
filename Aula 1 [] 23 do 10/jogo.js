class Jogo {
    constructor(titulo,genero,anoLancamento){
        this.titulo = titulo;
        this.genero = genero;
        this.anoLancamento = anoLancamento;
    }
    get gettitulos(){
        return this.titulo;
    }
    get getgeneros(){
        return this.genero;
    }
    get getanoLancamento(){
        return this.anoLancamento
    }

    set settitulos(titulo){
        this.titulo = titulo
    }
    set setgeneros(genero){
        this.genero = genero
    }
    set setanoLancamentos(anoLancamento){
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
// let jogos2 = new Jogo("Valorant","Tiro Tático","2020")
// let jogos3 = new Jogo("Dying Light","Survival Horror","2015")
console.log(jogos1.titulos)
// jogos2.exibirDados()
// jogos3.exibirDados()
jogos1.settitulos 
console.log(jogos1.titulos)

