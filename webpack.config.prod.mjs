// eslint-disable-next-line import-x/default
import CopyPlugin from 'copy-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { GenerateSW } from 'workbox-webpack-plugin'

import pkg from './package.json' with { type: 'json' }
import brResources from './site/public/locales/pt/translation.json' with { type: 'json' }
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
  bail: true,
  entry: './site/src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    extensionAlias: {
      '.js': ['.ts', '.js'],
    },
  },
  output: {
    publicPath: process.env.CI === 'true' ? `${pkg.homepage}` : '/',
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
          test: /[/\\]node_modules[/\\]react/,
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
    new webpack.EnvironmentPlugin({
      CI: false,
      GTAG_ID: false,
      ADSENSE: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'site/public',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      base: process.env.CI === 'true' && `${pkg.homepage}`,
      template: 'site/public/index.html',
      templateParameters: {
        name: brResources.app.name,
        title: brResources.app.title,
        description: brResources.app.description,
        lang: 'pt',
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'cpf/index.html',
      base: process.env.CI === 'true' && `${pkg.homepage}`,
      template: 'site/public/index.html',
      templateParameters: {
        name: brResources.app.name,
        title: brResources.app.title,
        description: brResources.app.description,
        lang: 'pt',
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'cnpj/index.html',
      template: 'site/public/index.html',
      templateParameters: {
        name: brResources.app.name,
        title: brResources.app.title,
        description: brResources.app.description,
        lang: 'pt',
      },
    }),
    new GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
}
