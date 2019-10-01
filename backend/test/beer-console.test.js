'use strict;'

const BeerController = require('./../src/controllers/beer.controller')

test('Not identify a thermostat null.', () => {
  expect(() => BeerController.init([], null).run()).toThrow()
})

test('Expect a console warn about the beers empty.', () => {
  expect(BeerController.init([], {}).run()).toBe('No Beers to look after today...')
})
