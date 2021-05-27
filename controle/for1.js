let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) { // Expressão que falará se ele vai continuar ou não dentro do laço
    console.log(`i = ${i}`) 
    
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] 
for(i = 0; i < notas.length; i++) { // É uma forma de navegar em cima de um array usando notas.length
    console.log(`nota = ${notas[i]}`)
}