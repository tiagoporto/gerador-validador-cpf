module.exports = function (config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    testRunner: 'jest',
    transpilers: [],
    coverageAnalysis: 'off',
    mutate: ['src/lib/CPF.ts'],
    babelrcFile: '.babelrc'
  })
}
