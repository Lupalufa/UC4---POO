class Conta {
    #saldo = 0;
    #titular;
    constructor(titular){
        this.#titular = titular
        Object.freeze(this)
    }

    get getTitular(){
        return this.#titular
    }

    set setTitular(titular){
        this.#titular = titular
    }

    get getSaldo(){
        return this.#saldo
    }

    set setSaldo(valor){
        try {
            if(valor > 0){
                this.#saldo += valor;
                console.log(this.getSaldo)
            }
            else{
                console.log("Não foi possivel depositar esse valor")
            }
        } catch (error) {
            console.error("Não é possivel realizar essa ação",error.message)
        }
    }

    sacar(valor){
        try {
            if(valor > this.getSaldo){
                console.log("Saldo insuficiente")
            }
            else{
                this.#saldo -= valor;
                console.log(`${valor} saque realizado com sucesso\:`)
            }
        } catch (error) {
            console.error("Não é possivel realizar essa ação",error.message)
        }
    }
}

module.exports = { Conta }