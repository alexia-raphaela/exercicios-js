const apenasConsoantes = string => {
    let novaString = string.split('') // split gera um array
    //let semVogais = []
    //console.log(novaString)
    for(let i = 0; i < novaString.length; i++){
      if(novaString[i] == 'a' || novaString[i] == 'e' || novaString[i] == 'i' || novaString[i] == 'o' || novaString[i] == 'u'){
          novaString.splice(i, 1)
          //console.log(novaString[i])

      }
      //console.log(novaString)
    }
    return novaString.toString().replace(/,/g, '') // regex é uma expressao regular, que retira o que está dentro da barra e o g é um modficador que busca todas as ocorrencias dentro do array
 
}
console.log(apenasConsoantes('abobrinha'))