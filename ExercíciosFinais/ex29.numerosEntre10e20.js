function intervaloEntreNumeros() {
  let numeros = [4, 9, 1, 10, 16, 18, 20, 29, 40]
  let noIntervalo = 0;
  let foraDoIntervalo = 0;

  for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < 10 || numeros[i] > 20){
      foraDoIntervalo = foraDoIntervalo + 1;
      
    } else {
      noIntervalo = noIntervalo + 1
    }
  }
  return `Números fora do intervalo ${foraDoIntervalo} números, números no intervalo ${noIntervalo} números`
  
}
console.log(intervaloEntreNumeros());
