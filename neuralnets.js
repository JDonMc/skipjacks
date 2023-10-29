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
