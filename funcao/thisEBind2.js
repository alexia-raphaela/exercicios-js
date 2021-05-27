function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { // Esta chamada da função set irá desparar outra função a partir de um determinado intervalo que foi passado
        self.idade++
        console.log(self.idade)  /*por estar armazenando o this que aponta para pessoa em uma constante chamada self, posso substituir this por self
                                   Fazendo com que self aponte para pessoa */
    }/*.bind(this)*/, 1000) // a cada um segundo esta função será disparada
 
}

  new Pessoa // instânciar o objeto pessoa