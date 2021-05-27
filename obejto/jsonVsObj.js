// JSON é um formato textual em um formato de dados para compartilhamneto de dados entre sistemas, não podendo ter funções dentro do formato JSON
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c} }  // No JSON a função irá ser excluida, porque JSON é um formato de dados
console.log(JSON.stringify(obj)) // JSON.stringify irá gerar obj no formato txtual 

//console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))  // Um texto tarnsformado em objeto por um JSON
console.log(JSON.parse('{ "a": 1 , "b": "string", "c": true, "d": {}, "e": [] }'))  // Quando trabalhamos com JSON, utilizamos aspas duplas tanto em atributos, quanto em strings
