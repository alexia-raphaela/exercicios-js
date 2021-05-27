function venderautomovel (veiculo) {
  switch (veiculo) {
    case 'hatch':
      return 'Compra efetuada com sucesso'
      break
    case 'sedans':
      return 'Tem certeza de que não prefere este modelo?'
      break
    case 'motocicletas':
      return 'Tem certeza de que não prefere este modelo?'
      break
    case 'caminhonetes':
      return 'Tem certeza de que não prefere este modelo?'
      break
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui'
    


  }
}
console.log(venderautomovel('hatch'))