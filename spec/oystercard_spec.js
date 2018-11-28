const mocha = require('mocha');
const expect = require('chai').expect;
const Oystercard = require('../src/oystercard');
var assert = require('chai').assert;

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
