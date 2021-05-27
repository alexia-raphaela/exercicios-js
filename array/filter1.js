// Filter é uma função callback que retorna true ou false e também recebe, item atual, indice atual e array
const produtos = [ 
    {nome: 'Notebook', preco: 2499, fragil: true },
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {   // assim como o map, o filetr também gera um novo array, porém ele podendo ser menor que o array orinigal
    return false      // isso quer dizer que para cada elemento do array que é (p), ele não estará presente no array final
    // se retornar true todos os elementos foram filtrados e estarão presentes no array final
    // se retornar false todos os elementos não foram filtrados, portanto não estarão no array final

  }))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))
