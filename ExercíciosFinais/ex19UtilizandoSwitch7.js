function pedidoDoCliente (codigo, quantidade) {
    switch (codigo) {
      case 100:
        return `Cachorro Quente, Quantidade: ${quantidade},  Valor a ser pago: R$ ${3 * quantidade},00 ` 
        break
      case 200:
        return `Hambúrguer Simples, Quantidade: ${quantidade}, Valor a ser pago: R$ ${4 * quantidade},00`
        break
      case 300:
        return `Cheeseburguer, Quantidade: ${quantidade}, Valor a ser pago: R$ ${5.50 * quantidade}0,00`
        break
      case 400:
        return `Bauru, Quantidade: ${quantidade}, Valor a ser pago: R$ ${7.50 * quantidade}0,00`
        break
      case 500:
        return `Refrigerante, Quantidade: ${quantidade}, Valor a ser pago: R$ ${3.50 * quantidade}0[],00`
        break
      case 600:
        return `Suco, Quantidade: ${quantidade}, Valor a ser pago: R$ ${2.80 * quantidade}0,00`
        break
      default:
        return 'Produto não existente'

    }
}
console.log(pedidoDoCliente(300, 1))
    