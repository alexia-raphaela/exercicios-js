function notasEscola (quatNotas) {
    //quatNotas = [0.0, 1.9, 2.0, 3.8, 4.9, 5.0, 6.9, 7.0, 8.9, 9.0, 10.0]

    for (let i = 0; i <= quatNotas[i]; i++) {
      if(quatNotas[i] >= 0.0 && quatNotas[i] <= 4.9 ){
        console.log( `Nota D ${quatNotas[i]}`)
      }
       if(quatNotas[i] >= 5.0 &&  quatNotas[i] <= 6.9){
        console.log( `Nota C ${quatNotas[i]}`)
      }
      if(quatNotas[i] >= 7.0 && quatNotas[i] <= 8.9) {
        console.log( `Nota B ${quatNotas[i]}`)
      } if(quatNotas[i] >= 9.0 && quatNotas[i] <= 10) {
          console.log( `Nota A ${quatNotas[i]}`)
      }

    
    }
    
  }
notasEscola([8, 8.1, 8.9, 11])