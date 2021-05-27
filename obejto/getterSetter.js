// Get Set te ajuda a inteseptar e alterar o valor de um atributo
const sequencia = {
    _valor: 1,    // convenção essa é uma variavel que é pretendida ser acessada apenas internamente no objeto
    get valor() { return this._valor++ },   // o Get irá ler o valor da variavel
    set valor(valor) {          // O set irá alterar o valor da variavel
        if (valor > this._valor) {
        this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // o javaScript sabe que se você está tentando ler o valor, ele  vai chamar o metodo Get
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

