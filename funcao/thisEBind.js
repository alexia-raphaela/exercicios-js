const pessoa = {
    saudacao: 'Bom dia!',
    falar() { // criar uma função dentro do objeto que está sendo recebido pela constante pessoa
        console.log(this.saudacao)

    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO (Object Oriented Programming)

const falarDePessoa = pessoa.falar.bind(pessoa) /* Neste caso this será sempre o objeto pessoa
                                                    O bind muda a referência do this*/
falarDePessoa()