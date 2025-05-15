// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  mutate: ['packages/**/src/**/*.ts', '!packages/**/src/**/*.test.ts'],
  reporters: process.env.CI ? ['dashboard'] : ['html'],
  packageManager: 'pnpm',
  coverageAnalysis: 'perTest',
  testRunner: 'jest',
  plugins: [
    '@stryker-mutator/jest-runner',
    '@stryker-mutator/typescript-checker',
  ],
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
}
