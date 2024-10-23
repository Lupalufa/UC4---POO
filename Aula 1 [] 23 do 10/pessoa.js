// COMO INICIAR

class Pessoa{
    // nome;
    // rg;
    // cpf;
    // idade;
    // sexo;
    // nacionalidade;
    // estadoCivil;
    constructor(nome, rg, cpf, idade, sexo, nacionalidade, estadoCivil){
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.estadoCivil = estadoCivil;
    }

    getNome(){
        return this.nome;
    }
    getRg(){
        return this.rg;
    }
    getCpf(){
        return this.cpf;
    }
    getIdade(){
        return this.idade;
    }
    getSexo(){
        return this.sexo
    }
    getNacionalidade(){
        return this.nacionalidade
    }
    getEstadoCivil(){
        return this.estadoCivil
    }

    setNome(nome){
        this.nome = nome;
    }

    exibirDados(){
        console.log(
            `
                Dados Pessoais
                Nome: ${this.nome},
                RG: ${this.rg},
                CPF: ${this.cpf},
                Idade: ${this.idade},
                Sexo: ${this.sexo},
                Nacionalidade: ${this.nacionalidade},
                Estado Civil: ${this.estadoCivil},
            `

        )
    }

}


let pessoa01 = new Pessoa("Vinicius", 8555, 559978,"indefinido","Masculino","Nordeste","Solteiro");
let pessoa02 = new Pessoa("Vinicius", 8555, 559978,"indefinido","Masculino","Nordeste","Solteiro");
console.log(pessoa01.getNome(), pessoa01.getRg())
pessoa01.setNome("Vander")
console.log(pessoa01.exibirDados())