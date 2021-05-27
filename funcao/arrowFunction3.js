let comparaComThis = function (param) {
      console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThis(global)
comparaComThis(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // forçando um contexto ao this
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
// O this em uma função arrow é associado ao contexto no qual a função foi escrita 