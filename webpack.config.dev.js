import path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import brResources from './site/src/locales/br/app.json' with { type: 'json' }
import babel from './babel.site.js'

const __dirname = import.meta.dirname

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

export default {
  mode: 'development',
  target: 'browserslist',
  entry: {
    index: './site/src/index.tsx',
  },
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
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
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              esModule: true,
              sourceMap: true,
              modules: {
                auto: /\.module\.\w+$/i,
                localIdentName: '[local]--[hash:base64:7]',
                exportLocalsConvention: 'camelCaseOnly',
              },
            },
          },
          postCSSLoaderConfig,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './site/public/favicon.ico',
      template: './site/src/index.ejs',
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
