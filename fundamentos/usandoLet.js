var numero = 1 /* As duas varáveis estão em escopos diferentes, sendo assim o console.log(dentro)
só irá imprimir o que está dentro
e fora será impresso o 2 escopo da variavel 1 */
{
      let numero = 2
      console.log('dentro =', numero)

}
console.log('fora =', numero)

/* Variavel var tem 2 escopos, Global e de função */
/* E variaveis definida com a plavara reservada let tem  escopos, Global, de função e de bloco */