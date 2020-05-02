const path = require('path')
const fse = require('fs-extra')
// const { camelCase } = require('lodash')
const parser = require('./parser')
const assert = require('assert')

const FROM_LANG = 'en'

function generateMappings(content) {
  const callback = this.async();

  // read source files
  const resources = { ...parser.parse(JSON.parse(content)) }

  const outputDir = path.resolve(process.cwd(), './locales')
  fse.mkdirsSync(outputDir)
  fse.writeFileSync(`${outputDir}/resources.json`, JSON.stringify(resources))
  callback(null, content)
}


module.exports = generateMappings
