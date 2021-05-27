mostrarArrayDeNumeros = arr => {
  let array = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0 && arr.length % 2 == 0){
        return arr
      } else {
        return []
      }
    }
    array.push(arr)
    return array
}
console.log(mostrarArrayDeNumeros([2, 80, 100, 400, 60, 600]))