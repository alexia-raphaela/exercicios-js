// switch é uma seleção multipla
// switch não é uma expressão relacional, que retorna um valor verdadeiro ou falso
const imprimirResultado = function (nota) {
    switch(Math.floor(nota)) {  // diferente de if e if else, o switch não retorna verdadeiro ou
         case 10: // para cada case terei um conjunto de sentenças para ser executada
         case 9:
             console.log('Quadro de honra')
             break // utilizar o break para que ele possa executar um de cada vez
         case 8: case 7:
             console.log('Aprovado')
             break
         case 6: case 5: case 4:
             console.log('Recuperação')
             break
         case 3: case 2: case 1: case 0:
             console.log('Reprovado')
             break
         default: // pode ser colocado em qualquer posição
             console.log('Nota inválida')

    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)