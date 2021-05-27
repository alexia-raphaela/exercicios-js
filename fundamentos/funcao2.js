// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b)

}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
  return a + b
}
console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b /* Esta é uma função simplificada,
quando eu não tenho as chaves significa que eu tenho uma função de uma única linha
ou seja, retorna um único resultado*/
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')