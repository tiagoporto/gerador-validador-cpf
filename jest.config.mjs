export default {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverageFrom: ['packages/gerador-validador-cpf/*.{ts,tsx,js,jsx}'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
}
