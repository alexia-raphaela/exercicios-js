// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a) // é possivel acessar a variavel a porque var não um escopo de bloco
//console.log(b)  // por outro lado o let é reservado da função, ele tem um escopo de bloco, sendo assim não é possivel acessa-lo dessa forma fora da função

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring, é forma de você tirar de dentro de uma estrutura algo, ou seja, desestruturar as coisas a partir do destructuring
// desestruturando uma string
const [l, e, ...tras] = 'Cod3r'
console.log([l, e, tras])

// desestruturando um array
const [x, , y] = [1, 2, 3]
console.log([x, y])

// desestruturando um objeto
const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)