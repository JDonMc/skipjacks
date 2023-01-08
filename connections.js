
class Connection {
  constructor(weight) {
    this.weight = weight
  }

  setWeight(weight) {
    this.weight = weight;
  }

  calcConnectionExit(input) {
    return input*this.weight;
  }
}

module.exports = { Connection };
