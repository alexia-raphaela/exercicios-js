const inverterObj = obj => {
  let objInvertido = {}
  for(let [chave, valor] of Object.entries(obj)) {
    objInvertido[valor] = chave
  }
  return objInvertido
}
console.log(inverterObj({produto: 'sabão', preco: 10.99, categoria: 'higiene'}))