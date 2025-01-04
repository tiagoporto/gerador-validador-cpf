import path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { GenerateSW } from 'workbox-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import brResources from './site/src/locales/br/app.json' with { type: 'json' }

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
    sourceMap: true,
  },
}

export default {
  mode: 'production',
  target: 'browserslist',
  devtool: 'source-map',
  entry: {
    index: ['./site/src/index.tsx'],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[id].[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]react/,
          filename: '[name].js',
          chunks: 'all',
          enforce: true,
          reuseExistingChunk: true,
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
        test: /\.(mjs|jsx?|tsx?)$/,
        exclude: /(node_modules)/,
        loader: 'swc-loader',
      },
      {
        test: /\.scss$/,
        use: [
          miniCSSLoaderConfig,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              esModule: true,
              modules: {
                auto: /\.module\.\w+$/i,
                localIdentName: '[local]--[hash:base64:7]',
                exportLocalsConvention: 'camelCaseOnly',
              },
            },
          },
          postCSSLoaderConfig,
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [miniCSSLoaderConfig, 'css-loader', postCSSLoaderConfig],
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
    new CopyPlugin({ patterns: ['site/public'] }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
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
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
}
