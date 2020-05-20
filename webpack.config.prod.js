const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const brResources = require('./src/site/locales/br/app.json')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const stylusLoaderConfig = {
  loader: 'stylus-loader',
  options: {
    import: [
      path.resolve(__dirname, './src/site/styles/settings/_variables.styl'),
      path.resolve(__dirname, './src/site/styles/helpers/index.styl')
    ]
  }
}

const miniCSSLoaderConfig = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    esModule: true,
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
      require('cssnano')(),
    ]
  }
}



module.exports = {
  mode: 'production',
  entry: {
    index: [
      'core-js/modules/esnext.global-this.js',
      'core-js/modules/es.number.is-nan.js',
      'core-js/modules/es.map.js',
      'core-js/modules/es.set.js',
      './src/site/index.tsx'
    ],
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
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
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
        loader: [miniCSSLoaderConfig, {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            modules: {
              localIdentName: '[local]--[hash:base64:7]',
            },
            esModule: true,
            localsConvention: 'camelCaseOnly'
          }
        }, postCSSLoaderConfig, stylusLoaderConfig]
      },
      {
        test: /\.styl$/,
        exclude: /\.module\.styl$/,
        loader: [miniCSSLoaderConfig, 'css-loader', postCSSLoaderConfig, stylusLoaderConfig]
      },
      {
        test: /\.css$/,
        loader: [miniCSSLoaderConfig, 'css-loader', postCSSLoaderConfig]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
        },
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyPlugin(['public']),
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
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
  ]
}
