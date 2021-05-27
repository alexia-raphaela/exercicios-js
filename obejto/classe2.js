class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {   // Extends é a forma que você tem no ambito de sintaxe de classe de definir que uma determinada classe tem outra classe como protótipo
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)  // Estou chamando o constructor sobrenome da classe Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)