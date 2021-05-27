function calcularFatorial (numeroPassado) {
    let Fatorial = 1

    for(i = 1; i <= numeroPassado; i++) {
       Fatorial= Fatorial * i
    }
    return Fatorial

}
console.log(calcularFatorial(6))