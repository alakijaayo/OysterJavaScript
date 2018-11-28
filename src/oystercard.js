function Oystercard() {
  this.MINIMUM_BALANCE = 0
  this.balance = 0
}

Oystercard.prototype.viewBalance = function () {
  return this.balance
};

Oystercard.prototype.top_up = function (money) {
  return this.balance += money
};

module.exports = Oystercard
