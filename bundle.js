(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
const { NeuralNet } = require('./neuralnets.js');
const { Layer } = require('./layers.js');
//const { SubLayer } = require('./sublayers.js');
const { Neuron } = require('./neurons.js');
const { Connection } = require('./connections.js');

module.exports = { NeuralNet, Layer, Neuron, Connection };

},{"./connections.js":1,"./layers.js":3,"./neuralnets.js":4,"./neurons.js":5}],3:[function(require,module,exports){
const { Neuron } = require('./neurons.js');

class Layer {
  constructor(numberConnections, numberNeurons, activation_function, derivative_function) {
    this.sublayers = subLayers; // Not working yet
    this.numberConnections = numberConnections;
    this.numberNeurons = numberNeurons;
    this.neurons = [];
    this.error = []
    for(var i=0; i<numberNeurons; i++) {
      this.neurons.push(new Neuron(this.numberConnections, Math.random(), activation_function, derivative_function));
    }
  }

  pushConnection(activation_function, derivative_function) {
    this.neurons.push(new Neuron(this.numberConnections, Math.random(), activation_function, derivative_function));
    this.numberNeurons += 1;
  }

  popConnection() {
    this.neurons.pop();
    this.numberNeurons -= 1;
  }

  unshiftConnection(activation_function, derivative_function) {
    this.neurons.unshift(new Neuron(this.numberConnections, Math.random(), activation_function, derivative_function));
    this.numberNeurons += 1;
  }

  shiftConnection() {
    this.neurons.shift();
    this.numberNeurons -= 1;
  }

  forwardPropagate(inputs) {
    this.outputs = [];
    for (var i=0; i<this.numberNeurons-1;i++) {
      this.outputs.push(this.neurons[i].forwardPropagate(inputs));
    };

    return this.outputs;
  }

  backpropagate(inputs, expectedOutputs, error) {
    this.error = error;
    this.inputs = inputs;
    this.expectedOutputs;

    for (var i=0; i<this.numberNeurons-1;i++) {
      this.error = this.neurons[i].backpropagate(this.inputs, this.expectedOutputs, this.error);
    }
  }
}

module.exports = { Layer };

},{"./neurons.js":5}],4:[function(require,module,exports){
class NeuralNet {
  constructor(layers, learning_rate, bias) {
    this.bias = bias;
    this.learning_rate = learning_rate;
    this.layers = layers;
  }

  addLayer(subset_neuronal_count, activation_function, derivative_function) {
    this.layers.push(new Layer(subset_neuronal_count, activation_function, derivative_function));
  }

  forwardPropagate(inputs) {
    var middle = inputs
    for (var i=0; i<this.layers.length-1;i++) {
      middle = this.layer[i].forwardPropagate(middle); //should be 1 number.
    }
    this.output = middle;
    return this.output;
  }

  backpropagate(inputs, expectedOutputs) {
    this.inputs = inputs;
    this.expectedOutputs = expectedOutputs;
    for (var i = this.layers.length - 2; i >= 0; i--) {
      for (var n = 0; n < this.layers[i+1].numberNeurons -1; n++) {
        var error = []
        for (var c = 0; c < this.layers[i+1].neurons[n].nun_connections -1; c++) {
          if (i === this.layers.length) {
            error.push(this.layers[i+1].neurons[n].connections[c].getWeight()*this.layers[i+1].neurons[n].costFunction(this.inputs, this.expectedOutputs)*this.layers[i].neurons[n].forwardPropagate(this.inputs));
          } else {
            error.push(this.layers[i+1].neurons[n].connections[c].getWeight()*this.layers[i+1].error[n]*this.layers[i].neurons[n].forwardPropagate(this.inputs));
          }
        }
        this.layers[i].backpropagate(inputs, expectedOutputs, error)
      }
      
    }

  }

  calculateError(inputs, expectedOutputs) {
    const output = forwardPropagate(inputs);
    this.error = [];
    for (let i = 0; i < expectedOutputs.length; i++) {
      this.error.push((expectedOutputs[i] - output[i]) ** 2);
    }
    return this.error;
  }
};

module.exports = { NeuralNet };

},{}],5:[function(require,module,exports){
const { Connection } = require('./connections.js');
class Neuron {
  constructor(num_inputs, bias, activation_function, derivative_function) {
    this.num_connections = num_inputs;
    this.connections = [];
    for (var i=0; i< num_inputs; i++) {
      this.connections.push(new Connection(Math.random()));
    }
    this.bias = bias;
    this.cost = 0;
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

},{"./connections.js":1}]},{},[2]);
