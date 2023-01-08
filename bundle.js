(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

},{}],2:[function(require,module,exports){
const { NeuralNet } = require('./neuralnets.js');
const { Layer } = require('./layers.js');
const { SubLayer } = require('./sublayers.js');
const { Neuron } = require('./neurons.js');
const { Connection } = require('./connections.js');

define(function (require, exports, module) {
  module.exports = { NeuralNet, Layer, SubLayer, Neuron, Connection };
});

},{"./connections.js":1,"./layers.js":3,"./neuralnets.js":4,"./neurons.js":5,"./sublayers.js":6}],3:[function(require,module,exports){
const { Neuron } = require('./neurons.js');

class Layer {
  constructor(numberConnections, numberNeurons, subLayers) {
    this.sublayers = subLayers;
    this.numberConnections = numberConnections;
    this.numberNeurons = numberNeurons;
    this.neurons = [];
    for(var i=0; i<numberNeurons; i++) {
      this.neurons.push(new Neuron(this.numberConnections, Math.random(), "1 / (1 + Math.exp(-x))", "this.activation_function(x) * (1 - this.activation_function(x))"));
    }
  }

  pushConnection() {
    this.neurons.push(new Neuron(this.numberConnections, Math.random(), "1 / (1 + Math.exp(-x))", "this.activation_function(x) * (1 - this.activation_function(x))"));
    this.numberNeurons += 1;
  }

  popConnection() {
    this.neurons.pop();
    this.numberNeurons -= 1;
  }

  unshiftConnection() {
    this.neurons.unshift(new Neuron(this.numberConnections, Math.random(), "1 / (1 + Math.exp(-x))", "this.activation_function(x) * (1 - this.activation_function(x))"));
    this.numberNeurons += 1;
  }

  shiftConnection() {
    this.neurons.shift();
    this.numberNeurons -= 1;
  }

  forwardPropagate(inputs) {
    //console.log(inputs);
    this.inputs = inputs;
    var chunkSizes = this.sublayers.map(sublayer => sublayer.sublayer_neuronal_count);
    var inputChunks = [];
    let currentIndex = 0;
    console.log("chunksizes: "+chunkSizes);
    if (chunkSizes.length > 1) {
      for (var chunkSize of chunkSizes) {
        console.log("chunksize: "+chunkSize);
        inputChunks.push(inputs.slice(currentIndex, currentIndex + chunkSize));
        currentIndex += chunkSize;
      }
    } else {
      inputChunks = inputs;
    }
    console.log("inputchunks: "+inputChunks);
    var outputChunks = [];
    if (this.sublayers.length > 1) {
      for (var sublayer of this.sublayers) {
        if (chunksSize.length > 1) {
          var partial_output = sublayer.forwardPropagate(inputChunks.shift(), chunkSizes.length);
        } else {
          var partial_output = sublayer.forwardPropagate(inputChunks, chunkSizes.length);
        }
        
        //console.log("partial: "+partial_output);
        outputChunks.push(partial_output);
        //console.log(outputChunks);
      }
      this.output = [].concat(...outputChunks);
    } else {
      //console.log("here: "+inputChunks);
      //console.log("here: "+inputChunks.shift());
      outputChunks = this.sublayers[0].forwardPropagate(inputChunks, chunkSizes.length);
      this.output = outputChunks;
      console.log("outputchunks: "+outputChunks);
    }
    console.log("layer_forward_output: "+this.output);
    return this.output;
  }

  backpropagate(error) {
    if (Array.isArray(error)) {
      var chunkSizes = this.sublayers.map(sublayer => sublayer.sublayer_neuronal_count);
      var errorChunks = [];
      let currentIndex = 0;
      for (var chunkSize of chunkSizes) {
        errorChunks.push(error.slice(currentIndex, currentIndex + chunkSize));
        currentIndex += chunkSize;
      }
      var nextErrorChunks = [];
      for (var sublayer of this.sublayers.slice().reverse()) {
        nextErrorChunks.push(sublayer.backpropagate(errorChunks.shift()));
      }
      const nextError = [].concat(...nextErrorChunks);
      return nextError;

    } else {
      for (var sublayer of this.sublayers.slice().reverse()) {
        error = sublayer.backpropagate(error);
      }
      return error;
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

},{"./connections.js":1}],6:[function(require,module,exports){
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
    console.log("sublayers: "+sublayers_in_layer);
    console.log("sl_weights: "+this.weights);
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

},{}]},{},[2]);
