'use strict;'

const BeerConsole = {
  init (beers, thermostat) {
    if (thermostat) {
      if (beers && beers.length > 0) {
        for (let index = 0, size = beers.length; index < size; index++) {
          const beer = beers[index]
          const temperature = thermostat.getTemperature(beer)
          if (beer.inThaw(temperature)) {
            console.warn(`*-> Beer ${beer.id} (${beer.type}) heating: ${temperature} [Ideal: ${beer.max}]`)
          } else {
            console.info(`Beer ${beer.id} (${beer.type}) at ${temperature} degrees.`)
          }
        }
        console.log('*-----------------------------------------------------------*')
      } else {
        console.warn('No Beers to look after today...')
      }
    } else {
      throw Error('Console can not read the Thermostat interface')
    }
  }
}

module.exports = BeerConsole
