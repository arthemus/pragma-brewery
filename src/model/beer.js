'use strict;'

class Beer {
  constructor (data) {
    this.id = data.id
    this.type = data.type
    this.min = data.min
    this.max = data.max
  }
  inThaw (temperature) {
    if (temperature && temperature > this.max) {
      return true
    }
    return false
  }
}

module.exports = Beer
