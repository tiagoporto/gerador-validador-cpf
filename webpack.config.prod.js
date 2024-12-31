import path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { GenerateSW } from 'workbox-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import brResources from './src/site/locales/br/app.json' with { type: 'json' }
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import babel from './babel.site.js'

const __dirname = import.meta.dirname

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

export default {
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
        test: /\.styl$/,
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
          {
            loader: 'stylus-loader',
            options: {
              stylusOptions: {
                import: [
                  path.resolve(
                    __dirname,
                    './src/site/styles/settings/_variables.styl',
                  ),
                  path.resolve(
                    __dirname,
                    './src/site/styles/helpers/index.styl',
                  ),
                ],
              },
            },
          },
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
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
