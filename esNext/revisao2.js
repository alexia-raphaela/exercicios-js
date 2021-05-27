// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // this apontará para module.exports, se a função em que ele está, foi escrita dentro de um arquivo node
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
// Dentro de uma função tradicional o this sempre aponta para global

// parametro default 
// em cima de um atributo de uma função você define um valor padrão
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))