// operador ...rest(juntar)/spread(espalhar)
// usar rest como parametro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99}
// com o spread estou pegando os atributos de dentro de funcionario e espalhando dentro de clone
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA, 'Rafaela']
console.log(grupoFinal)