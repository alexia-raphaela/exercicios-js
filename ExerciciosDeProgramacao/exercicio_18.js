const despesas = [
  {nome: 'Disney+', categoria: 'Entretenimento', preco: 19.99}, 
  {nome: 'moto g9plus', categoria: 'Eletronicos', preco: 110.00}
]
//console.log(despesas.map(des => des.preco))
const soma = despesas.map(des => des.preco).reduce((soma, gastos) => soma + gastos)
console.log(soma)