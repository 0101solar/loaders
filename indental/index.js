const Indental = require('indental')

module.exports = source => {
  this.cacheable && this.cacheable()
  try {
    return JSON.stringify(new Indental(source).parse())
  }
  catch (error) {
    this.emitError(error)
    return null
  }
}