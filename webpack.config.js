const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = [
  {
    entry: {
      'js/demo': path.join(__dirname, 'src/index.js'),
      'js/CPF': path.join(__dirname, 'src/js/CPF.js')
    },
    output: {
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader'
        }, {
          test: /\.hbs$/,
          loader: 'handlebars-loader',
          options: {
            partialDirs: [path.resolve(__dirname, 'src/partials')]
          }
        }, {
          test: /\.css$/,
          loader: [
            'style-loader',
            'css-loader'
          ]
        }, {
          test: /\.styl$/,
          loader: [
            'style-loader',
            'css-loader',
            'stylus-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.hbs')
      })
    ],
    devServer: {
      open: true,
      overlay: true,
      inline: true,
      watchContentBase: true,
      hot: true,
      contentBase: [
        path.join(__dirname, 'src')
      ]
    }
  }
]

module.exports = config
