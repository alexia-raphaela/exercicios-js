// Delta será um parametro padrão
function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado (usar uma variavel)
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () { // O this tornará algo visivel
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta 
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())