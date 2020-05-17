const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const brResources = require('./src/site/locales/br/app.json')

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

const postCSSLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: (loader) => [
      require('postcss-preset-env')({
        stage: 3,
      }),
      require('postcss-combine-media-query')(),
    ],
  }
}


module.exports = {
  mode: 'development',
  entry: {
    index: './src/site/index.tsx'
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    overlay: true,
    inline: true,
    open: true,
    host: '0.0.0.0'
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
            importLoaders: 2,
            modules: {
              localIdentName: '[local]--[hash:base64:7]',
            },
            esModule: true,
            sourceMap: true,
            localsConvention: 'camelCaseOnly'
          }
        },
          postCSSLoaderConfig,
          stylusLoaderConfig]
      },
      {
        test: /\.styl$/,
        exclude: /\.module\.styl$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          postCSSLoaderConfig,
          stylusLoaderConfig
        ]
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          postCSSLoaderConfig]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /app\.json$/,
        use: [
          {
            loader: path.resolve('loader/generate-mappings.js')
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@i18nResources': path.join(__dirname, './src/site/locales/resources.json')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './src/site/index.ejs',
      meta: {
        description: brResources.app.description,
        keywords: brResources.app.keywords,
      },
      templateParameters: {
        title: brResources.app.title,
        lang: 'pt-BR'
      }
    }),
  ]
}
