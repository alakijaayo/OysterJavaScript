const Journey = require('../src/journey')

function Oystercard() {
  this.MINIMUM_BALANCE = 1
  this.CARD_LIMIT = 90
  this.balance = 0
  this.history = []
  this.journey = new Journey();
}

Oystercard.prototype.viewBalance = function () {
  return this.balance
};

Oystercard.prototype.top_up = function (money) {
  if (money >= 91) {
    throw "Maximum amount allowed is £90"
  }
  return this.balance += money
};

Oystercard.prototype.deduct = function () {
  return this.balance -= 1
};

Oystercard.prototype.in_transit = function () {
  return this.journey.in_journey()
};

Oystercard.prototype.touch_in = function (station) {
  if (this.balance < this.MINIMUM_BALANCE) {
    throw "Minimum balance must be at least £1"
  } else if (this.journey.in_journey()) {
    return this.balance -= this.journey.fare()
  }
  return this.journey.in(station)
};

Oystercard.prototype.touch_out = function (station) {
    this.journey.out(station)
    this.history.push({start: this.journey.check_in, end: station})
    this.balance -= this.journey.fare()
    this.journey.check_in = null
    this.journey.check_out = null
    return "Your Journey is complete"
};

module.exports = Oystercard
