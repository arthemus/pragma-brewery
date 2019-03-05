'use strict;'

const BeerController = {

  init (beers, thermostat) {
    if (!thermostat) {
      throw Error('Console can not read the Thermostat interface')
    }
    return new BeerManager(beers, thermostat)
  }
}

class BeerManager {
  constructor (beers = [], thermostat) {
    this.beers = beers
    this.thermostat = thermostat
  }

  run () {
    if (this.beers && this.beers.length > 0) {
      const beersLog = []
      for (let index = 0, size = this.beers.length; index < size; index++) {
        const beer = this.beers[index]
        const temperature = this.thermostat.getTemperature(beer)
        if (beer.inThaw(temperature)) {
          beersLog.push(`Beer ${beer.id} (${beer.type}) heating: ${temperature} [Ideal: ${beer.max}]`)
        } else {
          beersLog.push(`Beer ${beer.id} (${beer.type}) at ${temperature} degrees.`)
        }
      }
      return beersLog
    } else {
      return 'No Beers to look after today...'
    }
  }
}

module.exports = BeerController
