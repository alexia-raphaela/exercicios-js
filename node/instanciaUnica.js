// node faz cache
// então este objeto terá uma instancia unica, porque o node faz cache desses modulos 

module.exports = {
    valor: 1,
    inc() { 
      this.valor++
    }
}