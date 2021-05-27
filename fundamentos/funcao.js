// função sem retorno 
function imprimirSoma(a, b) {
  console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno (abaixo valor padrão de b)
function soma(a, b = 1) {
  return a + b
}
console.log(soma (2, 3))
console.log(soma(2))
console.log(soma())
// Uma função é como um verbo, ela executa um processo
/*Eu tenho a minha função abaixo dela eu tenho um bloco de código
onde ele abriga uma senteça de código que será executada pela minha função */
/*Ou seja, uma função é um bloco de código, nomeado, podendo ser chamado 
quando for preciso utiliza-lo */
