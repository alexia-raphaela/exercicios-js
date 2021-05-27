let qntDeNumeros = [5, 9, 2, 6, -4, -8, 1077, 190, 10]

//while (qntDeNumeros % 2 == 0){
  // qntDeNumeros[i]
//}
let impares = 0;
let pares = 0;

for (i = 0; i < qntDeNumeros.length; i++) {
  if(qntDeNumeros[i] % 2 == 0){
    pares++
  
 
  } else {
    impares++
  }

}
 console.log(`Este vetor tem ${pares} números pares e ${impares} números ímpares`)
 