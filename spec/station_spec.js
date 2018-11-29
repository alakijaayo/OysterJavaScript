const mocha = require('mocha');
const expect = require('chai').expect;
const Station = require('../src/station');
var assert = require('chai').assert;
const sinon = require('sinon');

describe ("Station", function() {
  var station
});

beforeEach(function() {
  station = new Station();
});

it('starts with an empty station', function() {
  assert.equal(station.name, "")
});

it('starts with an empty zone', function() {
  assert.equal(station.zone, "")
});
