// Conceito de módulo, dentro do node um arquivo representa um módulo
// Usando o node como servidor, ele pode funcionar como servidor Web, provê uma página, um arquivo, um vídeo, imagem
// Node também pode servir como a sua API do seu sistema
// Módulo, sifnifica que ele tem uma certa interioridade, módulo deixa o que você escrever vísivel apenas dentro do módulo
// torna vísivel o que o módulo deixa exposto apenas dentro do módulo, é preciso exportar
console.log(this)
this.ola = 'Fala Pessoal'                        
exports.bemVindo = 'Bem Vindo ao node!' 
module.exports.ateLogo = 'Até próximo exemplo'
/* Três formas de exportar para fora desse módulo */