// Exemplos de classe simples
class Lancamento {
  constructor(nome = "Genérico", valor = 0) {
    this.nome = nome;
    this.valor = valor; // Estou adicionando ao objeto que está sendo instanciado um atributo valor que é o mesmo que eu recebi como parametro
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes;
    this.ano = ano;
    this.lancamentos = []
  }
   // ForEach é uma função que cria um for, para cada elemento l execute a função this.lancamentos
  // Callback é uma função que se alto executa quando chamada
  // ForEach cria um for para iterar cada elemento do array, passando como parametro uma função de Callback
  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))   
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach((l) => {
      valorConsolidado += l.valor
    });
    return valorConsolidado
  }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())