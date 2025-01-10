import globals from 'globals'
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    ignores: ['coverage/*'],
  },
  ...tpConfig.configs.base,
]
