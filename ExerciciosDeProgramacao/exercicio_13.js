const mostrarNumeros = array => {
    return array.filter( (v) => {
      if(typeof (v) == 'number'){
        return v
      } else {
        return // Retornar nada
      }} 
  )
}
console.log(mostrarNumeros(['alexia', 5000, 'robert', 30000 ]))