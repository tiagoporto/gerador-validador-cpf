import tpConfig from '@tiagoporto/eslint-config'
import pluginCypress from 'eslint-plugin-cypress/flat'
import pluginJest from 'eslint-plugin-jest'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tpConfig.configs.reactTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
  {
    name: 'cypress',
    files: ['**/*.spec.{js,ts}'],
    plugins: { ...pluginCypress.configs.recommended.plugins },
    languageOptions: {
      ...pluginCypress.configs.recommended.languageOptions,
    },
    rules: {
      ...pluginCypress.configs.recommended.rules,
    },
  },
  {
    name: 'jest',
    files: ['**/*.test.{js,ts}'],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: pluginJest.environments.globals.globals,
    },
    rules: {
      ...pluginJest.configs['flat/all'].rules,
      'jest/max-expects': 'off',
    },
  },
]
