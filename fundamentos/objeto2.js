console.log(typeof Object)  // Neste caso eu tenho o Object, que é do tipo função, instânciando ele, o próprio acessa os comportamentos pré definidos, ou seja, o próprio objeto
console.log(typeof new Object) // instanciar uma função, retornará um obejto a partir da instancia dessa função

const Cliente = function() {} // O objeto é uma instância da classe e a instância acessa os comportamentos pré definidos.
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
// Class é uma forma diferente de criar uma função
console.log(typeof Produto)
console.log(typeof new Produto())