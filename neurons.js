const { Connection } = require('./connections.js');
class Neuron {
  constructor(num_inputs, bias, activation_function, derivative_function) {
    this.num_connections = num_inputs;
    this.connections = [];
    for (var i=0; i< num_inputs; i++) {
      this.connections.push(new Connection(Math.random()*(0.1)-0.05));
    }
    this.bias = bias;
    this.cost = 0;
    this.activation = new Function("x", "return "+activation_function+';');
    this.derivative = new Function("x", "return "+derivative_function+';');
  }

  forwardPropogate(inputs) {
    var neuron_input_value = this.bias;
    for(var i=0; i < this.num_connections; i++) {
      neuron_input_value += this.connections[i].calcConnectionExit(inputs[i]);
      
      
    }
    //console.log(inputs);
    console.log(this.activation(neuron_input_value));
    return this.activation(neuron_input_value);
  }

  backPropogate(inputs, desired_outputs, error_out) {
    this.change_in_cost_per_weight = [];
    for (var i=0; i< this.num_connections -1; i++) {
      this.change_in_cost_per_weight.push(this.connections[i].calcConnectionExit(inputs[i])*error_out);
      this.connections[i].setWeight(this.change_in_cost_per_weight[i]*this.connections[i].getWeight())
    }
  }

  costFunction(inputs, desired_outputs) {
    // Cost function
    this.activated_inputs = [];
    for (var i = 0; i < this.num_connections -1; i++) {
      this.activated_inputs.push(this.activation(inputs[i]*this.connections[i]+this.bias));
      this.absolute_sum+=(desired_outputs - this.activated_inputs[i])**2;
    }
    this.cost = 1/(2*this.num_connections)*(this.absolute_sum);

    // Cost function changes to produce output layer error
    for (var i=0; i<this.num_connections -1; i++) {
      this.change_in_cost.push(this.activated_inputs[i]-desired_outputs[i]);
      this.change_in_activated_inputs.push(this.derivative(this.activated_inputs[i]));
      this.error.push(this.change_in_cost[i]*this.change_in_activated_inputs[i]);
    }
    return this.error;
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
