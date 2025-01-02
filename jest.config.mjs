export default {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['src/lib/*.{ts,tsx,js,jsx}'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
