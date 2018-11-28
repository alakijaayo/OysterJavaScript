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
})
