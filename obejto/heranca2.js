// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'  // Não faça isso em casa!  
const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B' }   // Passando um protótipo do avo para o pai, atribuindo a __proto__: avo
const filho = {__proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
// O mesmo acontece com uma função

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta 
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
      return `${this.velAtual}km/h de ${this.velMax}km/`
    }

}

const ferrari = {
    modelo: 'F40',
    velMax: 324   // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
      return `${this.modelo}: ${super.status()}`  // Com o super você está referenciando o seu protótipo

    }
}
Object.setPrototypeOf(ferrari, carro)                         // Função que establece uma relação de protótipo entre dois objetos
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())