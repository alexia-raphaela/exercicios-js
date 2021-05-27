function avaliarPlanoDeSaude (idade){

const valorFixo = 100;
const adicional1 = 80;
const adicional2 = 50;
const adicional3 = 95;
const adicional4 = 130; 

if (idade < 10) {
  return `Crianças com menos de 10 anos pagaram: ${valorFixo + adicional1}`
}
if (idade >= 10 && idade <= 30) {
  return `Pessoas com idade acima 10 até 30 anos pagaram: ${valorFixo + adicional2}`
}
if (idade > 30 && idade <= 60) {
  return `Pessoas com idade acima de 30 até 60 anos pagaram: ${valorFixo + adicional3}`
}
if (idade > 60 ) {
  return `Pessoas com idade acima de 60 anos pagaram: ${valorFixo + adicional4}`
}

}
console.log(avaliarPlanoDeSaude(90))