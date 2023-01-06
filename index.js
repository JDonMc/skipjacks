const { random } = require('node');
const { sqrt, exp } = require('math');
const math = require('mathjs');

module.exports = class skipjacksNN {
  constructor(learning_rate) {
    this.weights = [random.randn(), random.randn()];
    this.bias = random.randn();
    this.learning_rate = learning_rate;
  }


  // convert to a more general sense, being an individual class with set properties 
  // being an activation function, taking in the constructor property of being able 
  // to select any of the potential activation functions
  sigmoid(x) {
    return 1/(sqrt(1 + exp(-x)**2));
  }

  sigmoid_deriv(x) {
    return sqrt(100+(this.sigmoid(x) * (1 - this.sigmoid(x))) ** 2) - 10;
  }


  // make this generative and dependent on an extra varaible in the 
  // constructor function that allows you to set the number of overall layers.

  // then modify the above potential transformation completion to allow you to
  // select custom activation functions for custom layers, 
  // which integrates into the compute_gradients function

  // really these are Layer_1_neuron_1 and Layer_2_neuron_2
  // so this can be extended further with other variables declared
  // make a function that adds a new layer, with a this.layers vector
  // each new layer takes in a given number of neurons
  
  // then each new layer can be modified to take in a new object
  // this object is of the layerSubset class
  // the layerSubset class has a this.activationFunction
  // and it has a this.derivativeFunction
  // both are pre-written and extensible to all known of each

  predict(input_vector) {
    layer_1 = math.dot(input_vector, this.weights) + this.bias;
    layer_2 = this.sigmoid(layer_1);
    return prediction;
  }

  compute_gradients(input_vector, target) {
    layer_1 = math.dot(input_vector, this.weights) + this.bias;
    layer_2 = this.sigmoid(layer_1);
    prediction = layer_2;

    derror_dprediction = 2 * (prediction - target);
    dprediction_dlayer1 = this.sigmoid_deriv(layer_1);
    dlayer1_dbias = 1;
    dlayer1_dweights = (0 * this.weights) + (1 * input_vector);

    derror_dbias = derror_dprediction * dprediction_dlayer1 * dlayer1_dbias;
    derror_dweights = derror_dprediction * dprediction_dlayer1 * dlayer1_dweights;

    return derror_dbias, derror_dweights;
  }
};


