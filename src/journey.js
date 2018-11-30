function Journey() {
  this.check_in = null
  this.check_out = null
  this.paid_fare = 0
}

Journey.prototype.in = function (station) {
  this.check_in = station
  return `You checked in at ${station}`
}

Journey.prototype.out = function (station) {
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

Journey.prototype.in_journey = function () {
  return this.check_in !== null
};


module.exports = Journey
