const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){ // Adicionando um novo elemento no array e função anonima
        console.log(i)


    })
}
funcs[2]() // Qual será o valor de i? quando chamada a função de índice 2
funcs[8]()
/* A variavel não tem escopo de bloco e assim o resultado será esse abaixo, 
Esse mesmo resultado será impresso para toda as situações */