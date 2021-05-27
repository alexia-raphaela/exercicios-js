const segundoMaior = arr => {
  let maior = Math.max(...arr)
  arr.splice(arr.indexOf(maior), 1)
  let segMaior = Math.max(...arr)
  
  return segMaior
} 
console.log(segundoMaior([9, 5, 8, 10, 6, 3]))