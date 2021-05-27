function imprimirNum (inicio, fim) {
    let impar = 0;
    while (fim > inicio) {
       impar = inicio % 2
        if (impar != 0) {
         console.log(`Números ímpares de entre 0 e 100 ${inicio}`)
        }
       inicio ++
    }

}
imprimirNum(0, 100)