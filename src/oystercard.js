function Oystercard() {
  this.MINIMUM_BALANCE = 1
  this.balance = 0
  this.in_journey = false
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

Oystercard.prototype.touch_in = function () {
  if(this.balance < this.MINIMUM_BALANCE) {
    throw "Minimum balance must be at least £1"
  }
  return this.in_journey = true
};

Oystercard.prototype.touch_out = function () {
  this.in_journey = false;
  return this.deduct()
};

module.exports = Oystercard
