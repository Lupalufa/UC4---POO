class Dado {
    #face
    constructor(face){
        this.#face = face
    }

    get getFace(){
        return this.#face = face
    }

    set setFace(face){
        this.#face = face
    }
}

module.exports = { Dado }