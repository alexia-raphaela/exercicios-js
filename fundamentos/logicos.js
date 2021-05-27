function compras(trabalho1, trabalho2) { 
    const comprarSorvete = trabalho1 || trabalho2 // Constante comprarSoverte é a primeira variavel fruto de uma operação lógica
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // Operador bitwise xor 
    const comprarTv32 = trabalho1 != trabalho2 // Também é um operador exclusivo
    const manterSaudavel = !comprarSorvete // Operador Unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } // Criação de um objeto, essa forma, é a mais recente lançada no ES2015
    
  }

  console.log(compras(true, true))
  console.log(compras(true, false))
  console.log(compras(false, true))
  console.log(compras(false, false))
