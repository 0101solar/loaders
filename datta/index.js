const datta = require('datta')

module.exports = source => {
  this.cacheable && this.cacheable()
  try {
    return datta.parse(source)
  }
  catch (error) {
    this.emitError(error)
    return null
  }
}