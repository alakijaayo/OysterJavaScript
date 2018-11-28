function Oystercard() {
  this.MINIMUM_BALANCE = 0
  this.balance = 0
}

Oystercard.prototype.viewBalance = function () {
  return this.balance
};

Oystercard.prototype.top_up = function (money) {
  if (money >=91) {
    throw "Maximum amount allowed is £90"
  }
  return this.balance += money
};

Oystercard.prototype.deduct = function () {
  return this.balance -= 1
};

module.exports = Oystercard
