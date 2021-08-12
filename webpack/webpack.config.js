const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // modo de desenvolvimento 
    mode: 'development',
    // ponto de entrada
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        // pasta destino para salvar os arquivos gerados
        path: __dirname + '/public'
    },
    plugins: [
        // função construtora sendo instanciada, passando objetos como parametros
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        // regras, onde são colocados todos os loders
        rules: [{
            //primeiro loder, responsavel por ler arquivos com a extensão .css
            // posso formar a partir dessa expressao, uma pesquisa para achar arquivos com extensoes ss
            test: /\.s?[ac]ss$/,
            // verificar se o arquivo foi lido ou não
            use: [
                // plugin que extrai para fora o css, para um arquivo externo
                MiniCssExtractPlugin.loader,
                // style-loader ira criar uma tag style via dom
               // 'style-loader', // Adciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
            // ele vai injetar via Dom o css que ele interpretou
        }]
    }

}
// pasta assets é usada para recursos estaticos