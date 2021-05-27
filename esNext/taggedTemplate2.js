// Essa função é aplicada para ajudar a renderizar a template string
function real (partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
      valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
      resultado.push(partes[indice], valor) // alternando entres partes e valores
    }) 
    return resultado.join('')
}
const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
// no final você vai ter total controle de como renderizar sua template string