// pegar parametros a partir da minha chamada diretamente no terminal
const anonimo = process.argv.indexOf('-a') !== -1 // se a flag -a estiver presente na lista de argumentos, o -a retornará verdadeiro
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('fala Anônimo!\n') // stdout, saida padrão
    //finalizar aplicação
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    // stdin.on, entrada padrão
    // on data, entrada com dados a partir do teclado
    process.stdin.on('data', data => {  // chamando uma função passando o foi digitado dentro da variavel data
      const nome = data.toString().replace('\n', '') // substituir \n por um espaõ '' vazio, para remover o enter que o usuário colocou
      
      process.stdout.write(`Fala ${nome}!!\n`)  // \n descer para a próxima linha
      // finalizar o processo
      process.exit()
    }) 
}