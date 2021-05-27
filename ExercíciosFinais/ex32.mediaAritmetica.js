let temperaturaSemana = [14.5, 18.15, 17.9, 12.6];

function calcularMediaTemperatura (temperaturaSemana){
  let soma = 0;
  let media = 0;
    for(let i = 0; i < temperaturaSemana.length; i++){
        soma += temperaturaSemana[i]
        //console.log(soma)
    }
    return media = soma / temperaturaSemana.length 
}
console.log(calcularMediaTemperatura(temperaturaSemana))