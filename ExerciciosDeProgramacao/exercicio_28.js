const definirNum = (arr, num) => {
  const array = [] 
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log(element.toString().length)
    if(element.toString().length == num) {
      array.push(element)
    }
  }
  return array
}
console.log(definirNum([1, 10000, 300, 5], 5))