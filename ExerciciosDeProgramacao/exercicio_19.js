const obterMedia = arr => {
    const resultado = arr.reduce((resultado, num) => resultado + num)
    return resultado / arr.length
}
console.log(obterMedia([2, 3, 6, 8, 10, 40]))