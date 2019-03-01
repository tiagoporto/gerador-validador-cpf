module.exports = function(config) {
  config.set({
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    mutate: ["src/js/CPF.ts"],
    babelrcFile: ".babelrc"
  });
};
