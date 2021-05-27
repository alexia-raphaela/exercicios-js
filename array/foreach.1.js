const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {     // O primeiro parametro é o próprio elemento que estou percorrendo, e o segundo é o indice do ekemento que está sendo percorrido no momento
    console.log(`${indice + 1}) ${nome}`)
    

})
// função forEach e callback, função callback sendo chamada com um único parametro
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

// O indice quando passado é sempre passado como segundo parametro e não como primeiro

// O próprio array é passado como terceiro parametro

// A função callback smepre terá três parametros, sempre será nome, indice, array, o quarto parametro em diante nessa função não existe, então será retornado como undefined
