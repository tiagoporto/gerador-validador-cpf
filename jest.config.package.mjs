/** @type {import('jest').Config} */
import jestConfig from './jest.config.mjs'

export default {
  ...jestConfig,
  moduleNameMapper: {
    '^./index.js$': '../package/dist/index.js',
  },
}
