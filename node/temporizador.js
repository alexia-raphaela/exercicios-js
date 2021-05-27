const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 2', function () { // Irá desparar de 5 em 5 segundos
  console.log('Executando Tarefa 1!', new Date().getSeconds())
}) 

// temporizador padrão
setTimeout(function () {
  // A forma de cancelar o temporizador criado a partir de schedule
  tarefa1.cancel()
  console.log('Cancelando Tarefa 1!')
}, 20000)

//setImediate é como o setTimeout mas com o tempo de disparo zerado
//setInterval dispara a função de tempos em tempos

// Regra de recorrencia
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Irá executar de segunda 1 a sexta 5
regra.hour = 12
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra,function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})