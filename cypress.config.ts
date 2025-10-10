import { installPlugin } from '@chromatic-com/cypress'
import webpackPreprocessor from '@cypress/webpack-preprocessor'
import { defineConfig } from 'cypress'

import webpackConfig from './webpack.config.prod.mjs'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installPlugin(on, config)

      on(
        'file:preprocessor',
        webpackPreprocessor({
          // @ts-expect-error: webpack config
          webpackOptions: webpackConfig,
        }),
      )
    },
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:8080',
  },
})
