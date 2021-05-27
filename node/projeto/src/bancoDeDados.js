const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {} // Cada produto terá como "chave" um id

function salvarProduto(produto) { // Verifancando se objeto produto tem um id, se não ele adciona
  if (!produto.id) produto.id = sequence.id 
  produtos[produto.id] = produto
  return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {    // retornar todos os produtos
    return Object.values(produtos) // retornar todos os valores que estão dentro do objeto produtos
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

// tornando as funções visiveis fora desse módulo
// lista de funções que serão exportadas
module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }
