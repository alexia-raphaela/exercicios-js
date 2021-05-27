  // Utilizando o operador new você não só pode criar um novo objeto, como também o protótipo desse objeto criado aponta para a função
  function Aula(nome, videoID) {
      this.nome = nome
      this.videoID = videoID
  }

  const aula1 = new Aula('Bem Vindo', 123)
  const aula2 = new Aula('Até Breve', 456)
  console.log(aula1, aula2)

  // Simulando o new
  function novo(f, ...params) { // ...Recebe um conjunto de parametros, concatenando eles em um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
  }
const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)
