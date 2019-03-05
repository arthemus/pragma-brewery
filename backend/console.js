'use strict;'

const fs = require('fs')
const Beer = require('./src/model/beer')
const BeerController = require('./src/controllers/beer.controller')
const RandomThermostat = require('./src/thermostats/random.thermostat')

const args = process.argv.slice(2)[0]
const sourceData = args || './data/mock-beers.json'
const beersData = JSON.parse(fs.readFileSync(sourceData, 'utf8'))
const beerObjects = beersData.map((d) => new Beer(d))
const manager = BeerController.init(beerObjects, RandomThermostat)

setInterval(() => {
  manager.run().forEach((l) => console.log(l))
  console.log('*-----------------------------------------------------------*')
}, 5000)
