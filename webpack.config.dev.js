const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const brResources = require('./src/site/locales/br/app.json')
const babel = require('./babel.site')

const stylusLoaderConfig = {
  loader: 'stylus-loader',
  options: {
    sourceMap: true,
    stylusOptions: {
      import: [
        path.resolve(__dirname, './src/site/styles/settings/_variables.styl'),
        path.resolve(__dirname, './src/site/styles/helpers/index.styl'),
      ],
    },
  },
}

const postCSSLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    postcssOptions: {
      plugins: [
        [
          'postcss-preset-env',
          {
            stage: 3,
          },
        ],
        'postcss-combine-media-query',
      ],
    },
  },
}

module.exports = {
  mode: 'development',
  entry: {
    index: './src/site/index.tsx',
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    overlay: true,
    inline: true,
    open: true,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.(mjs|jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          ...babel,
        },
      },
      {
        test: /\.module\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              esModule: true,
              sourceMap: true,
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          postCSSLoaderConfig,
          stylusLoaderConfig,
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          postCSSLoaderConfig,
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'file-loader',
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
  ],
}
