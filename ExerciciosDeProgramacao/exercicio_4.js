
const mostrarMeses = (numero) => {
  let meses =  {  1: 'Janeiro', 2: 'Fevereiro', 3: 'Março', 4: 'Abril', 5: 'Maio', 6: 'Junho', 7: 'Julho', 8: 'Agosto', 9: 'Setembro', 10:'Outubro', 11: 'Novembro', 12: 'Dezembro' }
    for(let [key, value] of Object.entries(meses)) {
        if(key == numero) {
            return value
        }
    }
} 
console.log(mostrarMeses(4))
