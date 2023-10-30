const { Connection } = require('./connections.js');
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}
class Neuron {
  constructor(num_inputs, bias, activation_function, derivative_function) {
    this.num_connections = num_inputs;
    this.connections = [];
    for (var i=0; i< num_inputs; i++) {
      this.connections.push(new Connection(Math.random()*(0.1)-0.05));
    }
    this.bias = bias;
    this.biases = [];
    this.errors = [];
    this.cost = 0;
    this.change_in_cost = [];
    this.change_in_activated_inputs = [];
    this.activation = new Function("x", "return "+activation_function+';');
    this.derivative = new Function("x", "return "+derivative_function+';');
    this.activation_function = this.activation;
    this.derivative_function = this.derivative;
  }

  forwardPropogate(inputs) {
    var neuron_input_value = this.bias;
    for(var i=0; i < this.num_connections; i++) {
      neuron_input_value += this.connections[i].calcConnectionExit(inputs[i]);
    }
    //console.log(inputs);
    //console.log(neuron_input_value)
    //console.log(this.activation(neuron_input_value));
    return this.activation(neuron_input_value);
  }

  backPropogate(inputs, desired_outputs, error_out) {
    this.change_in_cost_per_weight = [];
    for (var i=0; i< this.num_connections -1; i++) {
      this.change_in_cost_per_weight.push((this.connections[i].calcConnectionExit(inputs[i])+this.biases[i])*error_out);
      //bug below
      this.costFunction(inputs, desired_outputs);
      this.error(desired_outputs);
      //console.log(this.errors);
      this.connections[i].setWeight(((this.connections[i].calcConnectionExit(inputs[i])+this.biases[i])-error_out-this.biases[i])/desired_outputs);
    }
  }

  costFunction(inputs, desired_outputs) {
    // Cost function
    if(isInt(desired_outputs)) {
      var desired_outputs = [desired_outputs]
    }
    this.activated_inputs = [];
    for (var i = 0; i < desired_outputs.length; i++) {
      this.activated_inputs.push(this.activation(inputs[i]*this.connections[i]+this.bias));
      this.absolute_sum+=(desired_outputs[i] - this.activated_inputs[i])**2;
    }
    this.cost = 1/(2*this.num_connections)*(this.absolute_sum);
    return this.cost;
  }

  error(desired_outputs) {
    this.desired_outputs = desired_outputs;
    // Cost function changes to produce output layer error
    for (var i=0; i<this.num_connections -1; i++) {
      this.change_in_cost.push(this.activated_inputs[i]-desired_outputs[i]);
      this.change_in_activated_inputs.push(this.derivative(this.activated_inputs[i]));
      this.errors.push(this.change_in_cost[i]*this.change_in_activated_inputs[i]);
      if(!this.bias === this.biases[i]) {
        this.biases[i] = this.biases[i] - this.errors[i]
      } else {
        this.biases.push(this.bias);  
      }
      
    }
    return this.errors;
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
