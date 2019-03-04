module.exports = function (config) {
  config.set({
    mutator: 'typescript',
    packageManager: 'npm',
    testRunner: 'jest',
    transpilers: [],
    coverageAnalysis: 'off',
    mutate: ['src/js/CPF.ts'],
    babelrcFile: '.babelrc'
  })
}
