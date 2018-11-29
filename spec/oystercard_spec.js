const mocha = require('mocha');
const expect = require('chai').expect;
const Oystercard = require('../src/oystercard');
var assert = require('chai').assert;
const sinon = require('sinon');

describe ("Oystercard", function() {
  var oystercard
});

beforeEach(function () {
  oystercard = new Oystercard();
});

it('starts with a balance of 0', function() {
  assert.equal(oystercard.viewBalance(), 0)
});

it('tops up the card with money', function() {
  oystercard.top_up(5)
  assert.equal(oystercard.viewBalance(), 5)
});

it('throws an error if maximum limit is exceeded', function() {
  expect( function () { oystercard.top_up(91) }).to.throw("Maximum amount allowed is £90")
})

it('deducts fare when a journey is made', function() {
  oystercard.top_up(5)
  oystercard.deduct()
  assert.equal(oystercard.viewBalance(), 4)
})

it('turns in_journey to true when called', function() {
  oystercard.top_up(5)
  oystercard.touch_in()
  assert.equal(oystercard.in_journey, true)
})

it('turns in_journey to false when called', function() {
  oystercard.touch_out()
})

it('raises an error if user taps in without minimum balance', function() {
  expect( function () { oystercard.touch_in() }).to.throw("Minimum balance must be at least £1")
})

it('deducts money when card is touched out', function() {
  oystercard.top_up(5)
  oystercard.touch_in()
  oystercard.touch_out()
  assert.equal(oystercard.viewBalance(), 4)
})

it('records the station where the journey started', function() {
  oystercard.top_up(5)
  var station = sinon.fake.returns('aldgate')
  oystercard.touch_in(station)
  expect(oystercard.entry_station).to.eql( [ station ] )
})

it('records the station where the journey ended', function() {
  oystercard.top_up(5)
  var exit = sinon.fake.returns('Elephant and Castle')
  oystercard.touch_out(exit)
  expect().to.eql( exit )
})

it('forgets the station when card is touched out', function() {
  oystercard.top_up(5)
  oystercard.touch_in('aldgate')
  oystercard.touch_out()
  expect(oystercard.entry_station).to.eql( [] )
})
