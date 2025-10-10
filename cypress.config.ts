import { installPlugin } from '@chromatic-com/cypress'
import webpackPreprocessor from '@cypress/webpack-preprocessor'
import { defineConfig } from 'cypress'
import webpack from 'webpack'

import webpackConfig from './webpack.config.prod.mjs'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installPlugin(on, config)

      on(
        'file:preprocessor',
        webpackPreprocessor({
          webpackOptions: webpackConfig as webpack.Configuration,
        }),
      )
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:8080',
  },
})
