/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
export default {
  mutate: ['src/lib/*.ts', '!src/lib/*.test.ts'],
  packageManager: 'npm',
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
}
