module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['src/lib/*.{ts,tsx,js,jsx}'],
  moduleNameMapper: {
    '@i18n/(.*)': '<rootDir>/src/site/locales/en/$1',
    '.+\\.(css|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '.+\\.(styl|less|sass|scss)$': 'jest-css-modules-transform',
    'src/site/locales/en/.+\\.json$': 'json-map-keys-jest',
  },
}
