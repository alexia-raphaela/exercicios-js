const palavrasSemelhantes = (palavra, arr) => {
    let array = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i].indexOf(palavra) == 0){ 
        array.push(arr[i])
      }
    }
    return array
}
console.log(palavrasSemelhantes('pro', ['string', 'ola', 'tchau', 'profissional', 'programador']))