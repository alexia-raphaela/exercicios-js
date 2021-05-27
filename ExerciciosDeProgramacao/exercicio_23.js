const contarString = frase => {
    const palavras = frase.split(' ')
    //console.log(palavras)
    return palavras.length
}
console.log(contarString('ola hoje é sexta'))