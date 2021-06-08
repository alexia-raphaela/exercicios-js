const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
  // elemento é o proprio elemento e tagName é o nome daquele elemento
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

  // classList, é uma lista de clases dentro do meu elemento
  // está contido na lista de classe o nolabel, se sim não entre nesse trecho
    if(!elemento.classList.contains('nolabel')) {
      // criando uma tag diretamente em javascript
      const label = document.createElement('label')
      label.style.backgroundColor = colors.get(tagName)
      label.innerHTML = tagName
      // tera o label em todas as tags antes de o primeiro filho estar eventualmente presente na tag
      elemento.insertBefore(label, elemento.childNodes [0])

    }
})




