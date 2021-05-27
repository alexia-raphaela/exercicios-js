const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)   // O método create define o protótipo o objeto que você passar por parametro
filha1.nome = 'Ana'
console.log(filha1.corCabelo)  

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}  // Os atributos writable indica que o objeto não pode ser mudado, está congelado e emunerable indica que ele poderá ser listado
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {    // Testando código para saber se os atributos desse objeto é dele mesmo ou se é por herança
  filha2.hasOwnProperty(key)  ?
  console.log(key) : console.log(`Por herança: ${key}`)

}