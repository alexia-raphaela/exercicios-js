// função auto invocada
// função qu ira proteger a variavel dolar
(function ($) {
    $.fn.temporizador = function (opcoes) {
        // sera mesclado o que eu tiver colocado como parametro padrao e aquilo que eu recebi por parametro 
        const opcoesFinais = $.extend({
            // função extend, é preciso passar um objeto
            // esse objeto é todos os valores por padrao que você tem
            mensagem: 'Em breve!',
            horario: '23:59:59'
            // segundo parametro objeto recebido como parametro
        }, opcoes)

        const horaDezena = $('<span class="digito">').html('0')
        const horaUnidade = $('<span class="digito">').html('0')
        const minutoDezena = $('<span class="digito">').html('0')
        const minutoUnidade = $('<span class="digito">').html('0')
        const segundoDezena = $('<span class="digito">').html('0')
        const segundoUnidade = $('<span class="digito">').html('0')

        // separador de dois pontos
        const separadorHora = $('<span class="separador">').html(':')
        const separadorMinuto = $('<span class="separador">').html(':')
        const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

        // o elemento atual tera a classe temporizador em css
        $(this).addClass('temporizador')
        // adicionando todos os elementos dentro do meu elemento selecionado, a partir do this
        $(this).append(horaDezena, horaUnidade, separadorHora,
            minutoDezena, minutoUnidade, separadorMinuto,
            segundoDezena, segundoUnidade, mensagem)

        // capturarando as horas nesse formato 
        // padrao do formato de horas
        // com o capturamento, eu tenho acesso separadamente a hora, minuto e segundo
        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const horarioAlvo = regex.exec(opcoesFinais.horario)
        // console.log(horarioAlvo)

        // intervalo de atualização
        let temporizador = setInterval(() => {
            // pegando a hora atual
            const agora = new Date()
            const alvo = new Date()
            alvo.setHours(horarioAlvo[1])
            alvo.setMinutes(horarioAlvo[2])
            alvo.setSeconds(horarioAlvo[3])

            // diferença em Mili segundos
            const diferencaEmMili = alvo.getTime() - agora.getTime()
            if (diferencaEmMili >= 0) {
                // regex ira extrair o formato da hora, separando, hora, minuto e segundo
                const diferenca = regex.exec(new Date(diferencaEmMili).toISOString())

                // para pegar a hora é preciso pegar o lemento de indice 0
                // pegando a hora e primeiro digito
                horaDezena.html(diferenca[1][0])
                // pegando um digito da hora, segundo caractere da hora
                horaUnidade.html(diferenca[1][1])
                // pegando o primeiro digito de minuto
                minutoDezena.html(diferenca[2][0])
                // pegando segundo digito minuto
                minutoUnidade.html(diferenca[2][1])
                // pegar primeiro digito segundo
                segundoDezena.html(diferenca[3][0])
                // pegar segundo digito segundo
                segundoUnidade.html(diferenca[3][1])
            } else {
                clearInterval(temporizador)
            }
        },1000)

        return this
        
    }
})(jQuery)