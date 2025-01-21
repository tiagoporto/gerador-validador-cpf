import webpackPreprocessor from '@cypress/webpack-preprocessor'
import { defineConfig } from 'cypress'

// @ts-expect-error: JS module
import webpackConfig from './webpack.config.prod.mjs'

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      // implement node event listeners here

      on(
        'file:preprocessor',
        webpackPreprocessor({
          webpackOptions: webpackConfig,
        }),
      )
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:8080',
  },
})
