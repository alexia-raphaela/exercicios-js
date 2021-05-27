const [a] = [10] // Neste caso eu criei uma variavel A que recebeu o primeiro elemento do array
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // Ignorando as posições n2 e n4 e atribuindo um valor a n6
console.log(n1, n3 , n5, n6)

const [, [, nota]] = [[, 8, 8],[9, 6, 8]] // Utilizando array dentro de outro array
console.log(nota)

