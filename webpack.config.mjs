import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'node:path'
import { env } from 'node:process'
import webpack from 'webpack'

import pkg from './package.json' with { type: 'json' }
import brResources from './site/public/locales/pt/translation.json' with { type: 'json' }

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
  entry: './site/src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    extensionAlias: {
      '.js': ['.ts', '.js'],
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'site/public'),
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
    new webpack.EnvironmentPlugin({
      CI: false,
      GTAG_ID: false,
      ADSENSE: false,
    }),
    new HtmlWebpackPlugin({
      base: env.CI === 'true' && `${pkg.homepage}`,
      template: 'site/public/index.html',
      templateParameters: {
        name: brResources.app.name,
        title: brResources.app.title,
        description: brResources.app.description,
        lang: 'pt',
      },
    }),
  ],
}
