function novoElemento(tagName, className) {
  const elem = document.createElement(tagName)
  elem.className = className
 // retornara o elemento a partir da execução desse codigo
  return elem
}

// instanciar para ter mais de uma barreira
function Barreira(reversa = false) {
  // usar o this para colocar o elemento dom e inserir na pagina
  // this.elemento é o proprio elemento que foi criado a partir de document.createElement
  // this.elemento é um atributo que representa o dom
  this.elemento = novoElemento('div', 'barreira')

  const borda = novoElemento('div', 'borda')
  const corpo = novoElemento('div', 'corpo')
  this.elemento.appendChild(reversa ? corpo : borda)
  this.elemento.appendChild(reversa ? borda : corpo)

  // Definir os variados tamanhos da barreira
  // um metodo com uma função dentro que definira os tamanhos da barreira
  this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b = new Barreira(true)
// b.setAltura(200)
// ira adcionar essa barreira dentro da area do jogo
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

// abertura entre uma barreira e outra
// posicao x da barreira
function ParDeBarreiras(altura, abertura, x) {
  // recebe novo elemento que é uma div, que tem a classe par-de-barreiras
    this.elemento = novoElemento('div',  'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    // adcionando esses elementos na div par de barreiras
    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    // this.alguma coisa dentro de uma função construtora, aquele atributo para a ser visivel fora da função

    this.sortearAbertura = () => {
      const alturaSuperior = Math.random() * (altura - abertura)
      const alturaInferior = altura - abertura - alturaSuperior
      this.superior.setAltura(alturaSuperior)
      this.inferior.setAltura(alturaInferior)
      
    }

    // em que posicao o par de barreiras está
      // pegando a posição atual
      this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
      // alterando o x a partir do x que foi passado
      this.setX = x => this.elemento.style.left = `${x}px`
      // largura do meu elemento
      this.getLargura = () => this.elemento.clientWidth

      this.sortearAbertura()
      this.setX(x)
}
// b é um objeto criado a partir da finção construtora
const b = new ParDeBarreiras(700, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.elemento)

