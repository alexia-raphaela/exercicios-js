// Formas de tratar um erro
function tratarErroELancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
      nome: erro.name,
      msg: erro.message,
      date: new Date
    }
}

function imprimirNomeGritado(obj) {
    // É um bloco de código para tentar encontrar um erro
     try {
      console.log(obj.name.toUpperCase() + '!!!')
    
      // O Catch irá capturar o erro
    } catch (e) { 
          tratarErroELancar(e)
    } finally { // O finally sempre será executado, tendo erro ou não
        console.log('final')
    }
}

const obj = { nome: 'Robert'}
imprimirNomeGritado(obj)
