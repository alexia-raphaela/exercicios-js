// Você exportou um objeto do node e ele faz um cache desse objeto e os contadores irão receber a mesma instancia sempre
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica') // O que for alterado o contadorB sentirá

const contadorC = require('./instanciaNova')()  // o contadorD e o C são independentes, ambos não sentem a modificação do outro
const contadorD = require('./instanciaNova')()  // Portanto são sempre criadas novas instancias, uma para cada contador 

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
