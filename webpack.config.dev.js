const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const stylusLoaderConfig = {
  loader: 'stylus-loader',
  options: {
    sourceMap: true,
    import: [
      path.resolve(__dirname, './src/site/styles/settings/_variables.styl'),
      path.resolve(__dirname, './src/site/styles/helpers/index.styl')
    ]
  }
}


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
    contentBase: path.join(__dirname, 'public'),
    overlay: true,
    inline: true,
    open: true
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
        }, stylusLoaderConfig]
      },
      {
        test: /\.styl$/,
        exclude: /\.module\.styl$/,
        loader: ['style-loader', 'css-loader', stylusLoaderConfig]
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
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@i18nResources': path.join(__dirname, 'src/site/locales/br/translations.json'),
    }
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
  ]
}
