class Pessoa {
    constructor(nome) { // construtor da classe criada
        this.nome = nome

    }

    falar() {
        console.log(`Meu nome é ${this.nome}`) // utilizando nesse momento this.nome, o mesmo passou a ser público
    }
}

const p1 = new Pessoa('João') // Instanciando new Pessoa
p1.falar()

// Criando objeto com função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('João')
p2.falar()