'use strict;'

const RandomThermostat = {
  getTemperature (beer) {
    if (beer) {
      if (beer.min) {
        return Math.floor(Math.random() * beer.min)
      }
      return 0
    } else {
      throw Error(`Beer ${beer} not found.`)
    }
  }
}

module.exports = RandomThermostat
