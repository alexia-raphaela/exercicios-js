module.exports = function(...nomes) { // Argumento variavel, você poderá passar quantos nomes quiser
  return nomes.map(nome => `Boa semana ${nome}!` ) // transformará em uma lista de saudações
}