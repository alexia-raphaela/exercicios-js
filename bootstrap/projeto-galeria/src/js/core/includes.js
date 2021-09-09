import $ from 'jquery'

// função não precisara ser exportada, não sera usada diretamente
// essa função lera todos os atributos wm-include
// o parent são as tags que tem a propriedade wm-include
function loadIncludes(parent) {
    
    if(!parent) parent = 'body'
    console.log(parent)
    // procure dentro do parent todos os elementos que possui a propriedade wm-include
    $(parent).find('[wm-include]').each(function(i,e) {
        const url = $(e).attr('wm-include')
        // Tendo a url e tendo importado o jQuery posso fazer a chamada do jQuery
        $.ajax({
            url,
            // função callback sera chamada quando a requisição for feita de forma bem sucessida
            success(data) {
                // chamando o elemento atual e setando data dentro de html
                $(e).html(data)
                // evitar que essa propriedade seja processada mais de uma vez
                $(e).removeAttr('wm-include')

                // função recursiva, chama ela mesma smepre o contexto que ela está tiver um filho
                loadIncludes(e)
            }
        })
    })

}
loadIncludes()