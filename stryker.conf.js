module.exports = function(config) {
  config.set({
    testRunner: "jest",
    mutator: "javascript",
    transpilers: ["babel"],
    reporter: ["html"],
    coverageAnalysis: "off",
    mutate: ["src/js/CPF.js"],
    babelrcFile: ".babelrc"
  });
};
