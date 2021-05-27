const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
     })
}
funcs[2]()
funcs[8]()
/* Pelo fato de i ter escopo de bloco e em vez da variavel nesse caso ser um let
Quando é feita a chamada da função o let lembra do valor que está em i 
E então é impresso o valor*/
/* Conceito de cloger, significa que uma função em JavaScript
 Tem a consciência do local onde ela foi definida*/