# skipjacks

## Client-Side JavaScript AI or Neural Net with CSide requests, training and output

To see the old README.md follow this link: https://github.com/JDonMc/skipjacks/blob/main/README_old.md it got too wordy and explanatory, goal setting, reasoning, theory, etc.







## Install

I never know if 1, 2, 3 means options or steps. These are options.

1. With `npm` from npmjs

`npm install skipjacks` 

2. With `npm` from GitHub

`npm install git+https://github.com/JDonMc/skipjacks.git`

3. From source for development, modifications, customisation.

`git clone https://github.com/JDonMc/skipjacks`
`cd skipjacks`

4. With `yarn` from GitHub

`yarn install git@github.com:JDonMc/skipjacks.git`


## How to Use

Currently a work in progress, building out from old files I have in Python, and in C++.
I tried asking ChatGPT for help, but I think I ended up wasting my time and making things worse. She kept losing her memory of what was going on, talking in circles, and blatantly refusing to acknowledge my points.

The class / object structure is made to be representative of the abstract form of AI in it's most primitive sense.

### Import statements

1. With `require`

```
const { Connection, Neuron, SubLayer, Layer, NeuralNet } = require('skipjacks');
```




2. With `import`

```
import { Connection, Neuron, SubLayer, Layer, NeuralNet } from 'skipjacks';
```




3. With `<script>` and `node` as an installed `node_module`

```
<script type="module" src="skipjacks/index.js"></script>
```	



4. With `<script>` on the client-side, no custom installs, which is ultimately what it's built for.

```
<script src="https://unpkg.com/skipjacks@0.0.2/index.js"></script>
```


### Initialising a NeuralNet and all it's components



## Roadmap

So the task at hand is to build the base neural networks with set activation functions, and easy customisability of activation functions to include the potential for novel activation functions for say the hyperbolic arc sin, or the hyperbolic (representing how Mice brains have now been measured to record spatial data, according to Nature 2023), which can be done through ready class inheritence perhaps, or even a custom method storing a given equation for the activation function and a given equation for its derivative function (as we've learnt that these are not 1:1 guaranteed implicatives, and alcalculus will need further modification for given assumptional characteristics of known datatypes), as well as configurable layer subsets each with unique activation functions, as well as transformers and multi-modal tokenizers (words, characters, subwords, which we'll then have to modify and extend to include the notion that the same word can have different definitions in different contexts, even within a single sentence).

