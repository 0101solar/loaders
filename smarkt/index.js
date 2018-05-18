const smarkt = require('smarkt')

module.exports = source => {
  this.cacheable && this.cacheable()
  try {
    return smarkt.parse(source)
  }
  catch (error) {
    this.emitError(error)
    return null
  }
}