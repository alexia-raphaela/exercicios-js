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
// const b = new ParDeBarreiras(700, 200, 800)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {
    this.pares = [
      // ele ira receber altura, abertura e a posicao x que estara extamente em largura
      new ParDeBarreiras(altura, abertura, largura),
      new ParDeBarreiras(altura, abertura, largura + espaco),
      new ParDeBarreiras(altura, abertura, largura + espaco * 2),
      new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]
    // de quantos em quantos pixels vai ser deslocado, quando comecar animar as barreiras
    const deslocamento = 3
    this.animar = () => {
      this.pares.forEach(par => {
        // as barreiras comecaram a se movimentar a partir desse codigo
        par.setX(par.getX() - deslocamento)

        // quando o elemento sair da area do jogo
        // se o par.getX for menor que a largura da barreira, significa que ele tera sumido da tela
        if (par.getX() < -par.getLargura()) {
          // o x sera setado para ir para o final
          par.setX(par.getX() + espaco * this.pares.length)
          par.sortearAbertura()
        }

        const meio = largura / 2
        // calculo para notificar os pontos do usuario
        const cruzouOMeio = par.getX() + deslocamento >= meio
           && par.getX() < meio
        if(cruzouOMeio) notificarPonto()
      })
    }
}

function Passaro(alturaJogo) {
  let voando = false

  this.elemento = novoElemento('img', 'passaro')
  this.elemento.src = 'imgs/passaro.png'

  // posicao do qual o passaro esta voando
  this.getY = () => parseInt(this.elemento.style.bottom.split('px'))
  // setar a altura em que o passaro está
  this.setY = y => this.elemento.style.bottom = `${y}px`

  // quando o usuario pressionar a tecla ira setar para true e o passaro ira voar
  window.onkeydown = e => voando = true
  // quando o usuario soltar a tecla, setara para false
  window.onkeyup = e => voando = false
  
  this.animar = () => {
    const novoY = this.getY() + (voando ? 8 : -5)
    // o passaro ira no maximo no teto e nao ira sumir
    const alturaMaxima = alturaJogo - this.elemento.clientHeight

    if (novoY <= 0) {
      this.setY(0)
    } else if (novoY >= alturaMaxima) {
      this.setY(alturaMax)
    } else {
      this.setY(novoY)
    }
  }
  // posicao inicial do passaro
  this.setY(alturaJogo / 2)
}



// ira exibir o ponto
function Progresso() {
  this.elemento = novoElemento('span', 'progresso')
  this.atualizarPontos = pontos => {
    // this. elemento ira receber os pontos que receber durante jogo
    this.elemento.innerHTML = pontos
  }
  this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')
// //passaro sera adcionado no jogo
// areaDoJogo.appendChild(passaro.elemento)
// areaDoJogo.appendChild(new Progresso().elemento)
// //para cada par de barreira cima e baixo sera adcionado no jogo
// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
// // animar o jogo
// setInterval(() => {
//   barreiras.animar()
//   passaro.animar()
// }, 20)

function FlappyBird() {
  let pontos = 0

  const areaDoJogo = document.querySelector('[wm-flappy]')
  const altura = areaDoJogo.clientHeight
  const largura = areaDoJogo.clientWidth

  const progresso = new Progresso()
  const barreiras = new Barreiras(altura, largura, 200, 400, 
    // função arrow que notificara os pontos
    () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)
  
    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))
    // o jogo iniciara
    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
          barreiras.animar()
          passaro.animar()
        }, 20)
    }
}

new FlappyBird().start()