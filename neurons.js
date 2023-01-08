const { Connection } = require('./connections.js');
class Neuron {
  constructor(num_inputs, bias, activation_function, derivative_function) {
    this.num_connections = num_inputs;
    this.connections = [];
    for (var i=0; i< num_inputs; i++) {
      this.connections.push(new Connection(Math.random()));
    }
    this.bias = bias;
    this.activation = new Function("x", "return "+activation_function+';');
    this.derivative = new Function("x", "return "+derivative_function+';');
  }

  forwardPropogate(inputs) {
    neuron_input_value = this.bias;
    for(var i=0; i < this.num_connections; i++) {
      neuron_input_value += this.connections[i].calcConnectionExit(inputs[i]);
    }
    return this.activation(neuron_input_value);
  }

  pushConnection() {
    this.connections.push(new Connection(Math.random()));
    this.num_connections += 1;
  }

  popConnection() {
    this.connections.pop();
    this.num_connections -= 1;
  }

  unshiftConnection() {
    this.connections.unshift(new Connection(Math.random()));
    this.num_connections += 1;
  }

  shiftConnection() {
    this.connections.shift();
    this.num_connections -= 1;
  }
}

module.exports = { Neuron };
