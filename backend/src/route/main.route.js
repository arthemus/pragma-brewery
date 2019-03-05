'use strict;'

const fs = require('fs')

const Beer = require('./../model/beer')
const BeerController = require('./../controllers/beer.controller')
const RandomThermostat = require('./../thermostats/random.thermostat')

const Main = (app) => {
  app.get('/', (req, res) => {
    try {
      const beersData = JSON.parse(fs.readFileSync('./backend/data/mock-beers.json', 'utf8'))
      const beerObjects = beersData.map((d) => new Beer(d))
      const manager = BeerController.init(beerObjects, RandomThermostat)
      const beersLogResult = manager.run()
      res.send(beersLogResult)
    } catch (err) {
      res.status(400).send(`Problems to get the current beers state:\n${err}`)
    }
  })
}

module.exports = Main
