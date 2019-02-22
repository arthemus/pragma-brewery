'use strict;'

const fs = require('fs')
const Beer = require('./src/model/beer')
const BeerConsole = require('./src/beer-console')
const RandomThermostat = require('./src/thermostats/random-thermostat')

const args = process.argv.slice(2)[0]
const sourceData = args || './data/mock-beers.json'
const beersData = JSON.parse(fs.readFileSync(sourceData, 'utf8'))
const beerObjects = beersData.map((d) => new Beer(d))
setInterval(() => BeerConsole.init(beerObjects, RandomThermostat), 5000)
