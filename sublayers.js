// Assume this doesn't exist for now. Will come back to it.

class SubLayer {
  constructor(subset_neuronal_count, activation_function, derivative_function, previous_layer_size_or_num_inputs) {
    this.sublayer_neuronal_count = subset_neuronal_count;
    this.weights = [];
    for (let i = 0; i < subset_neuronal_count; i++) {
      if (previous_layer_size_or_num_inputs == 1) {
        this.weights.push(Math.random());
      } else {
        this.weights.push(Array(previous_layer_size_or_num_inputs).fill(0).map(() => Math.random()));
      }
    }
    this.biases = Array(subset_neuronal_count).fill(0).map(() => Math.random());
    this.activation_function = new Function("x", "return "+activation_function+';');
    this.derivative_function = new Function("x", "return "+derivative_function+';');
  }
  // equivalent to a prediction
  forwardPropagate(inputs, sublayers_in_layer) {
    this.inputs = inputs;
    const output = [];
    if (sublayers_in_layer > 1) {
      for (let i = 0; i < this.weights.length; i++) {
        let sum = this.biases[i];
        console.log("sublayer_forward_inputs: "+inputs);
        for (let j = 0; j < inputs.length; j++) {
          sum += this.weights[i] * inputs[j];
        }
        var partial_output = this.activation_function(sum); //partial_output is each neuron in sublayer
        output.push(partial_output);
      }
    } else {

    }
    
    this.output = output;
    return this.output;
  }


  backpropagate(error) {
    //console.log(Array.isArray(this.weights));
    if (Array.isArray(this.weights)) {
      const nextError = [];
      //console.log(this.weights.length);
      for (let i = 0; i < this.weights.length; i++) {
        const derivative = this.derivative_function(this.output[i]);
        //console.log(this.output);
        //console.log(derivative);
        const delta = error * derivative;
        console.log(error);
        this.delta_w = this.weights.map((weight, i) => delta * this.inputs[i]);
        this.delta_b = delta;
        nextError.push(this.weights.map((weight, i) => weight * delta));
      }
      return nextError;
    } else {
      const derivative = this.derivative_function(this.output);
      const delta = error * derivative;
      console.log("weights: "+this.weights);
      console.log("inputs: "+this.inputs);
      console.log("output: "+this.output);
      console.log("delta: "+delta);
      this.delta_w = this.weights.map((weight, i) => delta * this.inputs[i]);
      console.log("delta_w: "+this.delta_w)
      this.delta_b = delta;
      var result = this.weights.map((weight, i) => weight * delta);
      this.weights = this.weights - this.delta_w;
      return result;
    }
    
    //this.updateWeights(this.learning_rate);
    
  }

  updateWeights(learning_rate) {
    for (let i = 0; i < this.weights.length; i++) {
      for (let j = 0; j < this.weights[i].length; j++) {
        this.weights[i][j] -= this.delta_w[i][j] * learning_rate;
      }
      this.biases[i] -= this.delta_b[i] * learning_rate;
      }
    }
}

module.exports = { SubLayer };
