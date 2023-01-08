const { Neuron } = require('./neuron.js');

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

module.exports = { skipjacksNN, Layer, SubLayer };
