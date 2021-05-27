// Varias formas de ler um objeto
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))  // Com keys você pega as chaves de um objeto
console.log(Object.values(pessoa))  // você também pode pegar os valores de um determinado objeto
console.log(Object.entries(pessoa))  // entries te da um array com as chaves e valores juntos

Object.entries(pessoa).forEach(([chave, valor]) => {   // você consegue percorrer os elementos do array que foi gerado a partir do seu objeto
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {   // você consegue definir uma propriedade de um objeto
  enumerable: true,
  writable: false,
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))
 
// Object.assing (ECMAScript 2015)
const dest = { a: 1 }   // objeto de destino irá receber os atributos
const o1 = { b: 2}
const o2 = { c: 3, a: 4 } // a: 4, está sobrescrevendo o valor do objeto dest a: 1
const obj = Object.assign(dest, o1, o2)   // nesse método todos os objetos que você passar, ele joga dentro de destino 

// no final você terá uma objeto gerado a partir da concatenção de todos os atributos que for passado

Object.freeze(obj)
obj.c = 1234
console.log(obj)