import globals from 'globals'
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['coverage/**', 'dist/**'],
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tpConfig.configs.typeScript,
]
