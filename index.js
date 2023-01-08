const { NeuralNet } = require('./neuralnets.js');
const { Layer } = require('./layers.js');
const { SubLayer } = require('./sublayers.js');
const { Neuron } = require('./neurons.js');
const { Connection } = require('./connections.js');

define(function (require, exports, module) {
  module.exports { NeuralNet, Layer, SubLayer, Neuron, Connection };
});
