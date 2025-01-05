/** @type {import('jest').Config} */
export default {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['packages/gerador-validador-cpf/**/*.{ts,tsx,js,jsx}'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  coveragePathIgnorePatterns: ['dist'],
  coverageReporters: process.env.CI ? ['lcov'] : ['text', 'html'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  moduleNameMapper: {
    '^(.*)\\.js$': '$1',
  },
}
