class Conta {
    #saldo
    #saldoInicial
    constructor(saldoInicial){
        this.#saldo = saldoInicial
        Object.freeze(this)
    }
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
        }
    }
    sacar(valor){
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
        }
    }
    get getSaldo(){
        return this.#saldo;
    }
    set setSaldo(saldo){
        this.#saldo = saldo
    }
}

const c1 = new Conta(200)
c1.saldo = 50000
console.log(c1.getSaldo)
console.log(c1.saldo)
