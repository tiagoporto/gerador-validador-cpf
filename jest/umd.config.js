export default {
  rootDir: '../',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    './CPF': '<rootDir>/package',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
