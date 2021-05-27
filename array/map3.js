Array.prototype.map2 = function(callback) {
    const newArray = []   // Como já estaos lidando com map que sempre gera um novo array, então para implementar um map eu preciso também criar um array vazio que receberá no final o resultado da callback
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }return newArray

}
const carrinho = [ 
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com o preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)