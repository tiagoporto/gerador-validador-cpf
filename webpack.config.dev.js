import path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import brResources from './src/site/locales/br/app.json' with { type: 'json' }
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
  entry: {
    index: './src/site/index.tsx',
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
        test: /\.styl$/,
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
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
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
