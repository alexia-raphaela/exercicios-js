// Call e Apply são duas funções que podemos chamar, invocar funções a partir delas
// A diferença entre call e apply é a forma como é passado os parametros 
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco      // Adicionando o método getPreco dentro de produto 
    // sendo assim produto vai criar um atributo getPreco, acossiando ao getPreco criado na função
}
global.preco = 20
global.desc = 0.1 // nesse contexto ele está acessando o this no global
console.log(getPreco()) // o resultado será NaN, porque nesse contexto global o preco não está definido
console.log(produto.getPreco()) // Passando a função a partir do objeto

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
 // A diferença em ultilizar apply e call é a passagem dos parametros

 // função call
 console.log(getPreco.call(carro, 0.17, '$')) // primeiro é o contexto, em seguida são os parametros

 // função apply
 console.log(getPreco.apply(global, [0.17, '$'])) // os parametros serão passados e um array