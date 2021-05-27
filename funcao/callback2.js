const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem usar callback
const notasBaixas1 = []
for (let i in notas) { // let  i in significa let indice em cima de notas 
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback 
const notasBaixas2 = notas.filter (function (nota) {  // Filter é uma função que filtrará os elementos de um array 
    return nota < 7 // irá retornar verdadeiro ou falso
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)