// Você tem o conceito de protótipo, pesquisando a partir da cadeia de protótipos
// O atributo prototype que toda função tem
// Tem o atributo .__proto__ que é como um objeto referencia o seu protótipo
function MeuObjeto () {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto    // aqui está acontecendo que quando dois objetos diferentes são criados a partir de uma mesma função ocntrutora
const obj2 = new MeuObjeto    // ambos apontam para um mesmo protótipo
console.log(obj1.__proto__===obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() { 
    console.log(`Bom dia! Meu nome é ${this.nome}!`) 
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__===MeuObjeto.prototype)
console.log(MeuObjeto.__proto__===Function.prototype)
console.log(Function.prototype.__proto__===Object.prototype)
console.log(Object.prototype.__proto__===null)    // ele mostra null porque chegou no Object.prototype, depois dele não há mais nada na cadeia de protótipos

