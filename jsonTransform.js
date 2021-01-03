const jsonJest = require('json-map-keys-jest')

module.exports = jsonJest.createTransformer({ prefix: '[name]:' })
