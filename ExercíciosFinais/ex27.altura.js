
function calcularAltura (crianca1, taxa1, crianca2, taxa2) {

  if (crianca1 == crianca2 ) {
    if(taxa1 > taxa2) {
        return `Criança1 utrapassará a criança2 em 1 ano, taxa criança1 ${taxa1}, taxa criança2 ${taxa2}`
    }
  } 
  if (crianca1 == crianca2) {
    if(taxa1 < taxa2) {
      return `Criança1 e criança2 tem a mesma altura, porém a criança2 tem mais probabilidade de ser mais alta`
    }
  }
  if (crianca1 > crianca2) {
    if(taxa1 == taxa2) {
      return `Criança1 é maior que criança2, porém seus crescimento são iguais`
    }

  }
  if (crianca1 < crianca2) {
    if(taxa1 > taxa2) {
      return `Criança1 utrapassará criança2, taxa criança1 ${taxa1}, taxa criança2 ${taxa2}`
    }

  }
   else if (crianca1 > crianca2){
      if(taxa1 < taxa2){
        return `Criança1 não utrapassará criança2, taxa criança1 ${taxa1}, taxa criança2 ${taxa2}`
      }
 
    } else {
      return `Ambas as crianças tem altura e taxa de crescimento iguais`

  }
}

function tempoDeCrescimento (criancaMenor, taxaCriancaMenor, criancaMaior, taxaCriancaMaior){

  let tempo = 0;

  while(criancaMenor < criancaMaior) {
    criancaMenor += taxaCriancaMenor
    criancaMaior += taxaCriancaMaior
    
  }
  tempo = tempo++
}

console.log(calcularAltura(160, 5, 120, 7))


  



