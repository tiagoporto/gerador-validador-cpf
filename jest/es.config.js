export default {
  rootDir: '../',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    './CPF': '<rootDir>/dist/CPF.es',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
