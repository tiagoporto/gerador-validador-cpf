import tpConfig from '@tiagoporto/eslint-config'
import pluginCypress from 'eslint-plugin-cypress/flat'
import pluginJest from 'eslint-plugin-jest'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['coverage/**', 'reports/**', '**/dist/', 'cypress/downloads/'],
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
  {
    files: ['**/*.test.{js,ts}'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
    },
  },
]
