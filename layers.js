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
