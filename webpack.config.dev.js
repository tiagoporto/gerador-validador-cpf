const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/site/index.tsx'
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'eval-source-map',
  devServer: {
    overlay: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.module\.styl$/,
        loader: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]--[hash:base64:7]',
            },
            esModule: true,
            sourceMap: true,
            localsConvention: 'camelCaseOnly'
          }
        }, {
            loader: 'stylus-loader',
            options: {
              import: [
                path.resolve(__dirname, './src/site/styles/_vertical-rhythm.styl'),
                path.resolve(__dirname, './src/site/styles/settings/_variables.styl')
              ],
            },
          },]
      },
      {
        test: /\.styl$/,
        exclude: /\.module\.styl$/,
        loader: ['style-loader', 'css-loader', {
          loader: 'stylus-loader',
          options: {
            import: [
              path.resolve(__dirname, './src/site/styles/_vertical-rhythm.styl'),
              path.resolve(__dirname, './src/site/styles/settings/_variables.styl')
            ],
          },
        },]
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './src/site/index.ejs',
      templateParameters: {
        title: 'Gerador e validador de CPF Open-Source | Tiago Porto',
        description: 'Gerador e validador de CPF, biblioteca JS open-source para gerar, validar e formatar CPF.',
        keywords: 'cpf,gerar,gerador,generator,generates,validador,valida,validates,formata,format,online',
        lang: 'pt-BR'
      }
    })
    // new HtmlWebpackPlugin({
    //   filename: 'pt-br/index.html',
    //   template: path.join(__dirname, 'src/index.hbs')
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'en/index.html',
    //   template: path.join(__dirname, 'src/index.hbs')
    // })
  ]
}
