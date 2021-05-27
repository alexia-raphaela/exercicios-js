const ferrari = {
  modelo: 'F40',
  velMax: 324

}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)   // a partir disso eu consigo acessar quem é o prtotótipo desse objeto
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)   // Object.prototype tem um protótipo acima dele?
console.log(Object.prototype.__proto__ === null)

// Objeto é uma função, por ser uma função, toda função tem o atributo prototype

function MeuObjeto () {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
