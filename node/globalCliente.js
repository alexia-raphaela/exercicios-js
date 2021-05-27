// impotando um modulo global para utilizar em outros arquivos
require('./global') // esse acesso é feito uma unica vez, pois ele está 'iniciando' o objeto que foi criado dele

console.log(MinhaApp.saudacao())

// Por ser um modulo global pode ser mudado
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)