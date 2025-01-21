import tpConfig from '@tiagoporto/eslint-config'
import pluginCypress from 'eslint-plugin-cypress/flat'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['coverage/**', '**/dist/'],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tpConfig.configs.typeScript,
  pluginCypress.configs.recommended,
]
