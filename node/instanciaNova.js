// Uma factory retorna um novo objeto
// Se você quer fazer uma nova instancia, utiliza-se uma função factory
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
} 