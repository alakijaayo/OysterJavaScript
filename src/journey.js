function Journey() {
  this.check_in = null
  this.check_out = null
  this.paid_fare = 0
}

Journey.prototype.in = function (station) {
  if (this.check_in !== null) {
    throw "Card is already in use!"
  }
  this.check_in = station
  return `You checked in at ${station}`
}

Journey.prototype.out = function (station) {
  if (this.check_out !== null) {
    throw "Card has already been checked out!"
  } else if (this.check_in === null) {
    throw "You have not touched in!"
  }
  this.check_out = station
  return `You checked out at ${station}`
};

Journey.prototype.fare = function () {
  if (this.check_in !== null && this.check_out !== null) {
    return this.paid_fare = 1
  } else if (this.check_in !== null || this.check_out !== null) {
    return this.paid_fare = 6
  }
  return this.paid_fare
};


module.exports = Journey
