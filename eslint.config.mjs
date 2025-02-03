import tpConfig from '@tiagoporto/eslint-config'
import pluginCypress from 'eslint-plugin-cypress/flat'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['coverage/**', '**/dist/', 'cypress/downloads/'],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
  },
  ...tpConfig.configs.react,
  pluginCypress.configs.recommended,
]
