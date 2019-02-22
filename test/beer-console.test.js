'use strict;'

const BeerConsole = require('./../src/beer-console')

console.warn = jest.fn()

test('Not identify a thermostat null.', () => {
  expect(() => BeerConsole.init([], null)).toThrow()
})

test('Expect a console warn about the beers empty.', () => {
  BeerConsole.init([], {})
  expect(console.warn).toHaveBeenCalled()
})
