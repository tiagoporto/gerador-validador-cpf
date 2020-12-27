const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const brResources = require('./src/site/locales/br/app.json')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const babel = require('./babel.site')

const stylusLoaderConfig = {
  loader: 'stylus-loader',
  options: {
    stylusOptions: {
      import: [
        path.resolve(__dirname, './src/site/styles/settings/_variables.styl'),
        path.resolve(__dirname, './src/site/styles/helpers/index.styl'),
      ],
    },
  },
}

const miniCSSLoaderConfig = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    publicPath: '',
    esModule: true,
  },
}

const postCSSLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          {
            stage: 3,
          },
        ],
        'postcss-combine-media-query',
        'cssnano',
      ],
    },
  },
}

module.exports = {
  mode: 'production',
  entry: {
    index: [
      'core-js/modules/esnext.global-this.js',
      'core-js/modules/es.number.is-nan.js',
      'core-js/modules/es.map.js',
      'core-js/modules/es.set.js',
      './src/site/index.tsx',
    ],
  },
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'website'),
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react: {
          test: /node_modules\/(react|react-dom)/,
          chunks: 'all',
          enforce: true,
        },
        polyfill: {
          test: /node_modules\/(core-js)/,
          chunks: 'all',
          enforce: true,
        },
        vendors: {
          test: /node_modules\/(?!core-js|react)/,
          chunks: 'all',
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          ...babel,
        },
      },
      {
        test: /\.module\.styl$/,
        use: [
          miniCSSLoaderConfig,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              esModule: true,
              modules: {
                localIdentName: '[local]--[hash:base64:7]',
                exportLocalsConvention: 'camelCaseOnly',
              },
            },
          },
          postCSSLoaderConfig,
          stylusLoaderConfig,
        ],
      },
      {
        test: /\.styl$/,
        exclude: /\.module\.styl$/,
        use: [
          miniCSSLoaderConfig,
          'css-loader',
          postCSSLoaderConfig,
          stylusLoaderConfig,
        ],
      },
      {
        test: /\.css$/,
        use: [miniCSSLoaderConfig, 'css-loader', postCSSLoaderConfig],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
        },
      },
      {
        test: /\.json$/,
        include: [path.resolve(__dirname, 'src/site/locales/en/')],
        use: ['json-map-keys-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@i18n': path.join(__dirname, './src/site/locales/en'),
      '@i18nResources': path.join(__dirname, './src/site/locales'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyPlugin({ patterns: ['public'] }),
    new HtmlWebpackPlugin({
      favicon: './public/favicon.ico',
      template: './src/site/index.ejs',
      meta: {
        description: brResources.app.description,
        keywords: brResources.app.keywords,
      },
      templateParameters: {
        title: brResources.app.title,
        lang: 'pt-BR',
      },
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
}
