const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const stylusLoaderConfig = {
  loader: 'stylus-loader',
  options: {
    import: [
      path.resolve(__dirname, './src/site/styles/settings/_variables.styl'),
      path.resolve(__dirname, './src/site/styles/helpers/index.styl')
    ]
  }
}


module.exports = {
  mode: 'production',
  entry: {
    index: './src/site/index.tsx',
    shared: 'react'
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'website')
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    },
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
        loader: 'file-loader',
        options: {
          outputPath: 'img',
        },
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new CopyPlugin(['public'],
    ),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './src/site/index.ejs',
      templateParameters: {
        title: 'Gerador e validador de CPF Open-Source | Tiago Porto',
        description: 'Gerador e validador de CPF, biblioteca JS open-source para gerar, validar e formatar CPF.',
        keywords: 'cpf,gerar,gerador,generator,generates,validador,valida,validates,formata,format,online',
        lang: 'pt-BR'
      }
    }),
    new GenerateSW()
  ]
}
