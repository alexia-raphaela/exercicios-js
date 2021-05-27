function comprarFrutas(fruta) {
  switch (fruta) {
    case "maçã":
      return "Não vendemos esta fruta aqui";
      break;
    case "kiwi":
      return "Estamos com escassez de Kiwis";
      break;
    case "melancia":
      return 'Aqui está, são R$ 3,00 reais o quilo'
      break
    default:
      return 'Error, tente outra fruta'
  }
}
console.log(comprarFrutas("melao"))
;
