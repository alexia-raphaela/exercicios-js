// exemplo de callback no browser
// a resposta dessa função é um array
// eu passo como parametro para a função a tag que eu quero
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
} 
