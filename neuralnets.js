class NeuralNet {
  constructor(layers, learning_rate, bias) {
    this.bias = bias;
    this.learning_rate = learning_rate;
    this.layers = layers;
  }

  addLayer(subset_neuronal_count, activation_function, derivative_function) {
    this.layers.push(new Layer(subset_neuronal_count, activation_function, derivative_function));
  }

  // counts as 'predict(input_vector)' from old whiteflag python ai
  forwardPropagate(inputs) {
    //console.log(inputs);
    let output = inputs;
    for (const layer of this.layers) {
      console.log("output: "+ output);
      output = layer.forwardPropagate(output);
      console.log("output_after: "+ output); //should be 1 number.
    }
    this.output = output;
    return output;
  }

  backpropagate(error) {
    for (const layer of this.layers.slice().reverse()) {
      console.log(error);
      error = layer.backpropagate(error);
    }
    return error;
  }

  calculateError(expectedOutputs) {
    const output = this.output;
    //console.log("output: "+output);
    let error = 0;
    if (Array.isArray(expectedOutputs)) {
      for (let i = 0; i < expectedOutputs.length; i++) {
        error += (expectedOutputs[i] - output[i]) ** 2;
      }
      console.log("error: "+error);
      error /= expectedOutputs.length;
      return error;
    } else {
      error += (expectedOutputs - output) ** 2;
      console.log("eO: "+expectedOutputs);
      console.log("o: "+output);
      return error;
    };
  }
};

module.exports = { NeuralNet };
