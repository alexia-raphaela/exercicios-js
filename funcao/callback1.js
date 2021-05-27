// callback: Passar uma função para outra função e quando um determinado evento acontecer essa função vai ser disparada e chamada de volta
// callback: você passa a função e chama de volta
// quando é utilizado a função callback, você passa uma função e o mesmo será chamado novamente quando vier a resposta
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))