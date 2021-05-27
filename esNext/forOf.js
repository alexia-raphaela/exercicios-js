// ForOf, laço de repetição, intera em cima de valores, diferente do for in que intera em cima de indice
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
  console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordados: true }],
    ['Set', { abordaddos: true }],
    ['Promise', { abordados: false }]
])

// pegando os arrays
for (let assunto of assuntosMap) {
    console.log(assunto)
}

// forma de receber tanto a chave como o valor
// imprimindo só as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

// imprimindo só os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

// percorrendo as entradas, as entries
// desestruturando o array
for (let [ch, vl] of assuntosMap.entries()) {
    // Acessando diretamente chave e valor
    console.log(ch, vl)
}

// aplicando forOf em cima de set
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}