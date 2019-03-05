'use strict;'

const Beer = require('./../src/model/beer')
const RandomThermostat = require('./../src/thermostats/random.thermostat')

test('Tring get a temperature for a Beer undefined.', () => {
  expect(() => RandomThermostat.getTemperature(null)).toThrow()
})

test('If the temperature is not defined, return zero.', () => {
  expect(RandomThermostat.getTemperature(Object.assign(new Beer({}), { min: null }))).toBe(0)
})
