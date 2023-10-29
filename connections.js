
class Connection {
  constructor(weight) {
    this.weight = weight
  }

  setWeight(weight) {
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }

  calcConnectionExit(input) {
    return input*this.weight;
  }
}

module.exports = { Connection };
