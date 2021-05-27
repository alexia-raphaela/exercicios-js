// Criando meu próprio foreach, utilizando prototype, implementando um foreach
// Eu criei, associei uma função no prototype de array chamada de foreach2, passando para essa função uma callback e para cada elemnto do array, a função callback é chamada
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // this[i]: valor atual, i: indice, this: array
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})