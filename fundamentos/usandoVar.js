{
  {
    {
      {
         var sera = 'Será???' //este exemplo não é o caso de variável var. Desta forma uma variável só será visível dentro do bloco, fora dele não
      }  console.log(sera)
    }
  }
}
   // bloco de códigos
   console.log(sera)

// Escopo é o lacal onde a variável é visível

function teste() {
    var local = 123 // Eu tenho um bloco especial, um bloco que está associado a uma função
    console.log(local)
}
teste ()
console.log(local)
// Escopo Global a variável que está dentro dele será visível, ou seja, também poderá ser acessada em qualquer lugar do código
/* Uma variavel só tem 2 escopos possíveis 
   Nível global, visível na sua aplicação inteira
   Escopo de função, só é visível dentro da função*/ 