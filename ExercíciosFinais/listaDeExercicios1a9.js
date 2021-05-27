// Exercício 1
// o que a função espera saõ parametros
function contaMatematica(a = 0, b = 0) {
  typeof a === "number" && typeof b === "number"
    ? console.log(`soma: ${a + b} sub: ${a - b} mult: ${a * b} div: ${a / b}`)
    : console.log("Só aceito números");
}

// quando chamada a função você passa os argumentos compativeis com os párametros
contaMatematica(27, 19);

// Exercício 2

/*const equilatero = 3
const isosceles = 2
const escaleno = 0 */

//let c = null
//let b = null
//let a = null

/*function teste() {
    console.log('Estou com soninho')
} */

function triangulo(a, b, c) {
  //console.log(` ${a} ${b} ${c}`)
  if (a == b && b == c) {
    console.log("É um triangulo equilátero");
  } else if (a == b && b != c) {
    console.log("É um triangulo isósceles");
  } else {
    console.log("É um triangulo escaleno");
  }
}
triangulo(2, 3, 4); // triangulo escaleno
triangulo(4, 4, 4); // Triangulo equilatero
triangulo(5, 5, 8); // Triangulo isósceles

/* 
triangulo(4, 5, 6)
triangulo(a, b, c)
triangulo('alexia', 'robert', 'noivos')
triangulo([], [], [])
triangulo({nome: 'alexia'}, {nome:'robert'}, {nome: 'nao sei'})
triangulo([], {}, 5)
triangulo(teste(), teste(), teste())
*/

// Exercício 3

function numeroElevado(base, expoente) {
  return Math.pow(base, expoente); // Math.pow é uma funcao que lida com potencia
}
const power = numeroElevado(4, 2);
console.log(power);

// Exercício 4

function divisao(a, b) {
  console.log(`resultado = ${Math.floor(a / b)}`); // Math.floor arredonda casas para baixo
  console.log(`resto da divisao = ${a % b}`);
}
divisao(10, 3);

// Exercício 5

function real(numero) {
  return `R$ ${numero.toFixed(2).toString().replace(".", ",")}`; // toFixed arredonda duas casas decimais
}

console.log(real(0.1 + 0.2));

// Exercício 6

function investimento(capitalInicial, jurosSimples, aplicacao) {
  // 3% é igual a 0.3

  return `Com taxa de juros simples sua aplicação final será ${
    capitalInicial + capitalInicial * jurosSimples * aplicacao
  }`;
}

console.log(investimento(10, 3 / 100, 2));

function economia(capitalInicial, jurosCompostos, aplicacao) {
  return `Com taxa de juros compostos sua aplicação será ${(
    capitalInicial *
    (1 + jurosCompostos) ** aplicacao
  ).toFixed(2)}`;
}

console.log(economia(15, 3 / 100, 3));

// Exercício 7

function formulaBhaskara(ax2, bx, c) {
  let delta = bx ** 2 - 4 * ax2 * c;
  // console.log('delta é', delta)
  let resultado = [];
  if (delta < 0) {
    return "Delta é negativo";
  }
  let x1 = ((-bx + Math.sqrt(delta)) / 2) * ax2;
  //console.log(x1)
  let x2 = ((-bx - Math.sqrt(delta)) / 2) * ax2;
  //console.log(x2)
  resultado.push(x1);
  resultado.push(x2);
  return resultado;
}

console.log(formulaBhaskara(190, 227, 45));

// Exercício 8

let jogos = '30, 40, 20, 4, 51, 25, 42, 38, 56, 0';

function pontuacao(_jogos) {
    let pontuacoes = _jogos.split(', '); // split é um método que ordenará uma string em uma lista, dividindo cada elemento dentro
    //console.log(pontuacoes)
    let pontos = []
    for (let i = 0; i < pontuacoes.length; i++) {
        pontos.push(parseInt(pontuacoes[i])) // Com o parseInt estou transformando uma string em número, ou seja em um inteiro 
           
    }
    //console.log(pontos)
    
   
    let recordesQuebrados = 0
    let piorJogo = 1 // é iniciado em 1 porque sempre havera um jogo ruim
    let menorPontuacao = pontos[0]
    let maiorPontuacao = pontos[0] 
    for (let i = 0; i < pontos.length; i++) {
        
        if(pontos[i] > maiorPontuacao ){
          maiorPontuacao = pontos[i]
          recordesQuebrados++

        } else if(pontos[i] < menorPontuacao){
            menorPontuacao = pontos[i]
            piorJogo = i + 1 +'º' 
          
        }
      
    }
  return [recordesQuebrados, piorJogo]
}
console.log(pontuacao(jogos));

// Exercício 9

function avaliarNotas (nota){
    
    if(nota < 40 ) {
      return ` Com a seguinte nota ${nota} o aluno foi reprovado`

    } else if(nota <= 100) {
      return ` Com seguinte nota ${nota} o aluno foi aprovado`
    
    } else {
      return ` A seguinte nota ${nota} é uma nota inválida`

    }
}

function arredondarNotas (nota) {
    if (nota % 5 > 2 ) {
      return nota + (5 - (nota % 5 ))
   
    } else {
      return nota
    }
}


console.log(avaliarNotas(arredondarNotas(101)))
//console.log(avaliarNotas(41))
//console.log(avaliarNotas(105))






































