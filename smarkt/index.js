const smarkt = require('smarkt')

module.exports = source => {
  this.cacheable && this.cacheable()
  try {
    return JSON.stringify(smarkt.parse(source))
  }
  catch (error) {
    this.emitError(error)
    return null
  }
}