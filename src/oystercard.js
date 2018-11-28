function Oystercard() {
  this.MINIMUM_BALANCE = 0
  this.balance = 0
}

Oystercard.prototype.viewBalance = function () {
  return this.balance
};

module.exports = Oystercard
