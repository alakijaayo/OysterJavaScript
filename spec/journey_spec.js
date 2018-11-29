const mocha = require('mocha');
const expect = require('chai').expect;
const Journey = require('../src/journey');
var assert = require('chai').assert;
const sinon = require('sinon');

describe ("Journey", function() {
  var journey
});

beforeEach(function () {
  journey = new Journey();
});

it('gives us null as its check_in when initialized', function() {
  assert.equal(journey.check_in, null)
})

it('gives us null as its check_out when initialized', function() {
  assert.equal(journey.check_out, null)
})

it('has a paid fare set to 0', function() {
  assert.equal(journey.paid_fare, 0)
})

it('throws an error is card is already in use', function() {
  journey.in('Aldgate')
  expect(function () { journey.in('Aldgate East') }).to.throw("Card is already in use!")
})

it('informs us of station checked in at if touched in', function() {
  assert.equal(journey.in('Aldgate'), "You checked in at Aldgate")
})

it('throws an error if card has already been touched out', function() {
  journey.in('Aldgate')
  journey.out('Elephant and Castle')
  expect(function () { journey.out('Clapham Junction') }).to.throw("Card has already been checked out!")
})

it('throws an error if card has not been touched in first', function() {
  expect(function () { journey.out('Clapham Junction') }).to.throw("You have not touched in!")
})

it('informs us of what station you left from', function() {
  journey.in('Aldgate')
  assert.equal(journey.out('Aldgate'), "You checked out at Aldgate")
})

it('charges a fare if journey is made', function() {
  journey.in('Aldgate')
  journey.out('Aldgate East')
  assert.equal(journey.fare(), 1)
})

it('charges a penalty fare if journey is incomplete', function() {
  journey.in('Aldgate')
  assert.equal(journey.fare(), 6)
})
