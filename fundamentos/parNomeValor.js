// par nome/valor

const saudacao = 'Opa' // Contexto léxico 1 é o lacal no qual a sua variavel foi definida fisicamente no código

function exec () {
  const saudacao = 'Falaaa' // Contexto léxico 2
  return saudacao

}
// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
    
}
console.log(saudacao)
console.log(exec())
console.log(cliente)