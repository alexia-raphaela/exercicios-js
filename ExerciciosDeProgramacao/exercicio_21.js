const pegarMenorNumero = arr => {
    const menor = Math.min.apply(Math, arr)
    return menor
}
console.log(pegarMenorNumero([2, 4, -6, 8]))

const arr = [2, 4, -6, 8]
let resultado = arr.map(function(num) {
    return Math.min.apply(Math, arr)
})
console.log(resultado)


