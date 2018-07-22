const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = [
  {
    entry: {
      'js/demo': path.join(__dirname, 'src/index.js')
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
        }, {
          test: /\.svg$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        favicon: 'public/favicon.ico',
        template: path.join(__dirname, 'public/index.hbs')
      })
      // new HtmlWebpackPlugin({
      //   filename: 'pt-br/index.html',
      //   template: path.join(__dirname, 'src/index.hbs')
      // }),
      // new HtmlWebpackPlugin({
      //   filename: 'en/index.html',
      //   template: path.join(__dirname, 'src/index.hbs')
      // })
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

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config[0].output.path = path.resolve(__dirname, 'site')
    config[0].optimization = {
      splitChunks: {
        chunks: 'all'
      },
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false
            }
          }
        })
      ]
    }
  }

  return config
}
