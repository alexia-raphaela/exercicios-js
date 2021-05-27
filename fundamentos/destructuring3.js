// função que retornará um número aleatório
function rand({ min = 0, max = 1000 }) { // passando atributos dentro do operador destructuring
/* As chaves indica que estou passando um objeto para essa função  = 
E nesta função quero que seja retirado de dentro do objeto 
Os dois atributos seguintes no código*/
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

    const obj = { max: 50, min: 40 }
    console.log(rand(obj))
    console.log(rand({ min: 955 }))
    console.log(rand({}))
    console.log(rand())