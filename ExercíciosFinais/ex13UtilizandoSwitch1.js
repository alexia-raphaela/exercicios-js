function classificarDiaUtil (diaDaSemana) {
   switch (diaDaSemana) {
     case 1: case 7:
        console.log('hoje é fim de semana')
            break
     case 2: case 3: case 4: case 5: case 6:
        console.log('Hoje é dia útil')
            break
     default:
        console.log('Dia inválido')
    }
}
console.log(classificarDiaUtil(8))