const obj = {
  nome: 'alexia',
  idade: 20,
  sexo: 'F'
}
const mostrarArray = _obj => {
  const array = []
  for(let [chave,valor] of Object.entries(_obj) ) {
      //console.log(key, value)
      array.push([chave,valor]) // array de arrays
  }
  return array
}
console.log(mostrarArray(obj))