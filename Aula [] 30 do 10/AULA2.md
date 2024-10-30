# abstração

- classe => Molde de criação
- obejtos => istância da classe

getters e setters {}=> manipular os atributos

getters => Mostrar

setters => setar e modificar

Classe aluno {
    nome // atributos
    idade // atributos
    constructor(nome,idade)//método para a criação dos o objetos
    this.nome = nome // agora o método é diferente do atributo
    this.idade = idade


getNome(){
    return this.nome
}
setNome(nome){
    this.nome = nome
}}

const a1 = new aluno ("Joel",18) // aderindo um novo aluno com um nome e idade de acordo com os atributos e metodos destacados
na classe

a1.setNome("valtemir") // motificando o nome setado
a1.getNome() // retornando o nome
a1.nome = "ValtemirJr" // Modificando sem usar o set (porem isso so pode ser usado se caso os dados estiverem publicos)

encapsulamento
público
privado
protected
package

