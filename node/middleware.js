// middleware pattern (chain of responsability)
// Ctx, é o contexto, o objeto que será transmitido de uma função para outra
// next irá chamar a próxima função
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}
const passo2 = (ctx, next) => { 
  ctx.valor2 = 'mid2'
  next()
}
const passo3 = ctx => ctx.valor3 = 'mid3' // Não tem uma próxima função então será passado só contexto

const exec = (ctx, ...middlewares) => { // ...Operador West, estou passando varias funções e ele junta tudo dentro de um array
  const execPasso = indice => {
      middlewares && indice < middlewares.length &&
      middlewares[indice](ctx, () => execPasso(indice + 1)) // a função execPasso chama ela mesma 
  }
  execPasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)