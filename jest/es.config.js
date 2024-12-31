export default {
  rootDir: '../',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    './CPF': '<rootDir>/dist/CPF.es',
    '@i18n/(.*)': '<rootDir>/src/site/locales/en/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
