// While é uma estrutura de repetição
// baseada na expressão de verdadeiro ou falso e em quanto for verdadeiro ele continua, quando for falso ele termina de executar
function getInteiroAleatororioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
// assim como if o while precisa de uma expressão que retorne verdadeiro ou falso
while (opcao != -1) {
    opcao = getInteiroAleatororioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.` )

}

console.log('Até a próxima!')