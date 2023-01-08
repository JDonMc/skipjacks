const { skipjacksNN, Layer, SubLayer } = require('./index');
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
const neuralNetwork = new skipjacksNN(testlayers, learning_rate, bias);

test('Neural network improves accuracy over time', () => {
  const inputs = [ [3, 1.5],[2, 1],[4, 1.5],[3, 4],[3.5, 0.5],[2, 0.5],[5.5, 1],[1, 1], ];
  const expectedOutputs = [0, 1, 0, 1 ,0 ,1, 1 ,0];

  let previousError;
  let error_graph = [];
  let cumulative_errors = [];
  for (let i = 0; i < 100000; i++) {
    for (let dataset_range = 0; dataset_range < expectedOutputs.length; dataset_range++) {
      const outputs = neuralNetwork.forwardPropagate(inputs[dataset_range]);
      const error = neuralNetwork.calculateError(expectedOutputs[dataset_range]);
      if (previousError && error > previousError) {
        //console.log("Error did not decrease, previousError: "+previousError+", currentError: "+error);
      }
      previousError = error;
      error_graph.push(neuralNetwork.backpropagate(error));
      

      if (i % 100 == 0) {
        cumulative_error = 0;
        for (data_instance_index = 0; data_instance_index < inputs.length; data_instance_index++) {
          data_point = inputs[data_instance_index];
          target = expectedOutputs[data_instance_index];

          prediction = neuralNetwork.forwardPropagate(data_point);
          test_error = (prediction - target)**2;

          cumulative_error = cumulative_error + test_error;
        }
        cumulative_errors.push(cumulative_error);
      }
    }
  }
  cumulative = 0;
  for (const error of cumulative_errors) {
    cumulative += error;
  }
  average_cumulative_error = cumulative / 1000;
  console.log("Average cumulative error: "+average_cumulative_error);
  console.log(asciichart.plot(error_graph));

});