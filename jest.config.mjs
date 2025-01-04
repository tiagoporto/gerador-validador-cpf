/** @type {import('jest').Config} */
export default {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['packages/gerador-validador-cpf/*.{ts,tsx,js,jsx}'],
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  moduleNameMapper: {
    '^(.*)\\.js$': '$1',
  },
}
