const { NeuralNet, Layer, SubLayer } = require('./index');
var asciichart = require('asciichart');

const arc_activationFunction = "1/(Math.sqrt(1 + Math.exp(-x)**2))";
const arc_derivativeFunction = "Math.sqrt(100+(this.activation_function(x) * (1 - this.activation_function(x))) ** 2) - 10";

const activationFunction = "1 / (1 + Math.exp(-x))";
const derivativeFunction = "this.activation_function(x) * (1 - this.activation_function(x))";

const sublayers1 = [
  new SubLayer(2, activationFunction, derivativeFunction, 2),
  new SubLayer(3, activationFunction, derivativeFunction, 2),
  new SubLayer(1, activationFunction, derivativeFunction, 2)
];
const sublayers2 = [
  new SubLayer(4, activationFunction, derivativeFunction, 6),
  new SubLayer(2, activationFunction, derivativeFunction, 6)
];
const sublayers3 = [
  new SubLayer(1, activationFunction, derivativeFunction, 6)
];

const layers = [
  new Layer(sublayers1),
  new Layer(sublayers2),
  new Layer(sublayers3)
];

const testlayers = [
  new Layer([new SubLayer(1, activationFunction, derivativeFunction, 2)])
];


const learning_rate = 0.2;
const bias = Math.random();
const oldNN = new skipjacksNN(layers, learning_rate, bias);
//const neuralNetwork = new skipjacksNN(testlayers, learning_rate, bias);

test('Neural network improves accuracy over time', () => {
  var neuralNetwork = new NeuralNet([new Layer(2,16,arc_activationFunction, arc_derivativeFunction), new Layer(16,16,arc_activationFunction, arc_derivativeFunction),new Layer(16,16,arc_activationFunction, arc_derivativeFunction),new Layer(16,16,arc_activationFunction, arc_derivativeFunction),new Layer(1,16,arc_activationFunction, arc_derivativeFunction),], 0.01, 0.5)

  const inputs = [ [3, 1.5],[2, 1],[4, 1.5],[3, 4],[3.5, 0.5],[2, 0.5],[5.5, 1],[1, 1], ];
  const expectedOutputs = [0, 1, 0, 1 ,0 ,1, 1 ,0];

  let error_graph = [];
  let cumulative_errors = [];
  var error = [];
  var outputs = [];
  for (let i = 0; i < 100; i++) {

    for (let dataset_range = 0; dataset_range < expectedOutputs.length-2; dataset_range++) {
      outputs.push(neuralNetwork.forwardPropagate(inputs[dataset_range]));
      error.push(neuralNetwork.calculateError(inputs[dataset_range], expectedOutputs[dataset_range]));
      neuralNetwork.backpropagate(inputs[dataset_range], expectedOutputs[dataset_range]);
      
    }

  }

  for (let dataset_range = expectedOutputs.length-2; dataset_range < expectedOutputs.length; dataset_range++) {
      outputs.push(neuralNetwork.forwardPropagate(inputs[dataset_range]));
      error.push(neuralNetwork.calculateError(inputs[dataset_range], expectedOutputs[dataset_range]));
      
      
    }
  console.log(error);

});