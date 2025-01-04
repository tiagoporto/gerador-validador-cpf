import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'node:path'

import brResources from './site/src/locales/br/app.json' with { type: 'json' }

const __dirname = import.meta.dirname
const postCSSLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
  },
}

export default {
  mode: 'development',
  target: 'browserslist',
  devtool: 'eval-source-map',
  entry: {
    index: './site/src/index.tsx',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    extensionAlias: {
      '.js': ['.ts', '.js'],
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(mjs|jsx?|tsx?)$/,
        exclude: /(node_modules)/,
        loader: 'swc-loader',
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
        generator: {
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
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
