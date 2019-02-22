'use strict;'

const RandomThermostat = {
  getTemperature (beer) {
    if (beer) {
      return Math.floor(Math.random() * beer.min)
    } else {
      console.error(`Beer ${beer} not found.`)
    }
  }
}

module.exports = RandomThermostat
