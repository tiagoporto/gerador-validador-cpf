export default {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['src/lib/*.{ts,tsx,js,jsx}'],
  moduleNameMapper: {
    '@i18n/(.*)': '<rootDir>/src/site/locales/en/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
