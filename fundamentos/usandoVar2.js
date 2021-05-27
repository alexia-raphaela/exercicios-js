var numero = 1
{
   var numero = 2 // Aqui ele sobescreveu o valor de 1
   console.log('dentro =', numero) // aqui ele ignora o bloco por não ser bloco de uma função, sendo assim fora do bloco ele é visível

}
console.log('fora =', numero)