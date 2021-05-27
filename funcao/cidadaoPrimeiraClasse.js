// Função em JS é First-Class Object (Citiziens)
// first-Class é quando a linguagem
// higher-order function 
// OOP - Object Oriented Programming

//Criar de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) { // retornando uma terceira função
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)