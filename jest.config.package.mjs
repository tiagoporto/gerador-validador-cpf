/** @type {import('jest').Config} */
import jestConfig from './jest.config.mjs'

export default {
  ...jestConfig,
  moduleNameMapper: {
    '^./index.js$': '<rootDir>/packages/gerador-validador-cpf/dist/index.js',
    '^./utils/generateFirstDigits.js$':
      '<rootDir>/packages/gerador-validador-cpf/dist/utils/generateFirstDigits.js',
  },
}
