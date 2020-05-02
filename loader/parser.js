const parser = {
  parse(input, prefix = '') {
    const result = {}

    if (!input) {
      return result
    }

    Object.keys(input).forEach(key => {
      if (typeof input[key] === 'string') {
        const keyPrefix = key.split('_')[0]

        result[key] = `${prefix}${key}`
        result[keyPrefix] = `${prefix}${keyPrefix}`
      } else if (typeof input[key] === 'object') {
        result[key] = this.parse(input[key], `${prefix}${key}.`)
      }
    })

    return result
  }
}

module.exports = parser
