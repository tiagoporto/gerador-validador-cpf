module.exports = function (config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    testRunner: 'jest',
    transpilers: [],
    reporters: ['clear-text'],
    coverageAnalysis: 'off',
    mutate: ['src/lib/CPF.ts'],
    babelrcFile: '.babelrc'
  })
}
