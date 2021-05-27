console.log(typeof String)    // todos tem o atributo .prototype
console.log(typeof Array)   
console.log(typeof Object)

String.prototype.reverse = function () {        // revertendo uma string e podendo adicionar uma nova função ou um atributo dentro de um determinado protótipo
  return this.split('').reverse('').join('')  // split quebra a string em letras, reverse tem a função de reverter, join junta tudo novamente 

}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

// Não substitua comportamentos que já existem na forma global, pois pode gerar um efeito colateral grande