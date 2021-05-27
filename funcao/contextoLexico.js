// contexto léxico é muito importante para uma função, 
// quando ela é declarada ela carrega consigo o contexto onde foi declarada, embora ela esteja sendo chamada em outro lugar
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()