# skipjacks

## Client-Side JavaScript AI or Neural Net with CSide requests, training and output

Please note, as this is a Client-Side-training AI, the key feature for this is that the training can be done uniquely and integrated into the back-end server database, so the server doesn't need to use immense GPU power (read: cost), seeing as Moore's Law has near-enough ended for digital computation compared to a potential Quantum Moore's Law (which may or may not be the case as there is no ability to recursively (read: exponentially) scale down a transistor/circuit design into single atomic architectures, however there is still the potential for economic growth through inventive designs to lower the cost of a Q-computer, and potentially bring it to room temperature super-conductivity, in current device styles with portability and energy demands, while it has been reported, it has yet to be statistically confirmed with relative figures of qBits per size or qBits per cost or qBits per size per cost, as is needed to have an analog for Moore's Law, while currently the main growth of qBits may or may not be a corollary of rapidly increasing investments into the field, ie the bigger qBit potential may or may not be at an exponentially improved cost measure). Either way it's a long way to get large numbers entanglements, large amounts of error correction (which itself is susceptible to error), and large amounts q-algorithms for application in say encryption (needed for the security of a potential quantum internet), quantum internet, and finally a quantum AI algorithm.

This is all by the wayside, as a single qubit-second as of June 2022 costs approximately $0.05 USD (quantumcomputingreport.com), whereas IBM sells their 27-qubit Falcon system for $1.75 USD per second, and Rigetti sells Aspen-11 40 qubit for $0.35 per second, thus there is an order of magnitude between the most expensive and least expensive qubit operations pricing. Meaning that over a given day there is 60x60x24 or 86400 seconds in a day, being at minimum $864 a day and $8,640 a day, so for Rigetti (the min) their stock Market Cap (NYSE:RGTI from stockanalysis.com) was approximately 1.2 B at opening in April 2021 and is now only 94M in Jan 2023. From just the 40Q being fully utilised (high guess as they are the most affordable) they would earn $315k pa. But they have since released an 80Q in 2022, but the accuracy (mean fidelity per op) drops to 87% for 2-qbit gates. Thus it is prohibitively expensive and has a very long way to go.

The name skipjacks was chosen for it containing the letters CSJSAI, which is what we would call this package if we wanted it to be an acronym, instead we opted for a pseudo-acronym with inclusion of missing letters.

The reasoning for this package is two-fold, for one, we need a strong and complex Client-Side AI, so that clients can perform requests to fetch data, and then to train an AI with it and then port that to the back-end framework. The second is that I have personally modified Newtonian Calculus based upon a modified assumption, that curves at the infinitesimal are not made up of straight lines, instead are made up of curved lines. To do this we nest newtonian calculus and assume the secondary curved lines are the ones made up of straight lines. This leads to a clarification of the understanding developed by certain paradoxes such as Gabriel's Horn, and Fractals, whereby we can have infinite surface area for finite volume, the same applies in 2D for a curvature's arc-length over a given linear distance, and the same is done in reverse for integration as well as for a derivative. When the nesting follows an infinite regress these numbers become infinite, however this means we cannot actually calculate an answer for a derivative/integral if this were the case. However, the derivative/integral equations are not reversibly symmetric, although one may derive a reversibly symmetric form of each. Although, taking it just to the first step beyond the Newtonian form of calculus (as it includes the Arc-Length equation we have named it Arc-Length Calculus, or Alcalculus) has been tested and shown to significantly improve an AI system in 3 metrics while worsening it in 2. The worsenings is that it reaches a local-minima far more often and the computational cost per learning is far greater (as any and all activation functions can be modified by Alcalculus, and it being a more complicated algorithm, it requires that each iteration of training uses more calculations (or alcalculations)), meanwhile the improvements are that when it does not reach a local-minima (which is detectable very early on, minimising wasted computational resources) it improves accuracy, lowers error, and lowers variance. To see proof of this have a look at a test-dummy on https://github.com/JDonMc/whiteflag/blob/master/cumulative_error.png where the orange is a standard sigmoidal activation function, and the blue is the exact same activation function but assuming all notions derived from calculus can be re-derived using alcalculus (ie including non-linear derivatives, sinusoids, and exponents). As you can see the lowered variance is the greatest improvement above all, for those not willing to look, the standard sigmoid returns an error variance ranging from aprroximately 1.87% to around 2.75%, whereas the alcalculus sigmoid returns around 1.80% to 1.85%. Further nesting does not create further improvements, however, the alcalculus paper assumes there are other modifications that can be made to the theory of alcalculus and includes room for an extra function for the case of perhaps assuming that these intra-integral-curves aren't just curves, but are instead frequencies, or wavelets or chirplets. We have also used the alcalculus equation to modify the Fourier Transform, calling it the Arc-Fourier. Further, as Quantum Physics relies on the integral symbol, which we have replaced with an improvement, we have named arc-quantum, and the list of applications includes enzymatics, pH balance, acid-base reactions, chemistry orbital shapes (following the electron-cloud model), receptor-ligand in/on/around cells, spectral analysis, WiFi, AM/FM radio... and the list goes on. As these applications were known before inventing/discovering alcalculus, it is licensed under a No-Derivative-Works, Non-Commercial, for 70 years beyond my death, so of course, if this sounds applicable you must ask my permission. For end-to-end encryption please email me at donkeycon@protonmail.com and if you are not willing for the host of protonmail to have access (as end-to-end encryption means they still own your private keys), then you can use the following PGP encryption as well, for all other enquiries please contact me at jack.mclovin@outlook.com 

-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.10.10
Comment: https://openpgpjs.org

xsBNBGE+9e4BCACtbmcsekR5z1sdg4OXh6t6Rmq5JAlqmstC9nvYU0JLoPqX
vWP3XBQ+bCmeGypb6b74uneq34xvF/x2EoZtYbPQrht+wyRrmkX7CnjD1dl4
XO9KDrz5+4NQ1nSHmZ4+Qh/q+DFYji1aH/W0pcKE+xx8hrHgj4p9Rwo4yGf9
gOXhei4BV3yIjFVWu8uXnH3vuWQdO9YXPxQ9ZGfRv0tcHk0JA4LVffsA/8ky
36yB8nBMKzbPe0XsSJgRj90BerYbIsHErJxwJ7ZjNp/DrfuOYIifdFjbDo6X
7kZuKX3LPnm6wsdzxvVlpwp1pLO8ut8OwRw+9+4ts1UoE8rpIaPMhqYHABEB
AAHNKWphY2sgbWNsb3ZpbiA8amFjay5tY2xvdmluQGJ1ZHMuY2FubmFiaXM+
wsCNBBABCAAgBQJhPvXuBgsJBwgDAgQVCAoCBBYCAQACGQECGwMCHgEAIQkQ
AnqQFw/frfUWIQSC/jHIhNDyXRE91GcCepAXD9+t9WLlCACCtod658tyiIOq
OHNUzbbw966/sHBsipZ1KSYDmkHnsJMPh5Cm0+h9LJfsGgavyFBrk8fz4GTh
leeN0LI5AU/rzG9qKTZ2f7rPqHX93t4YTGWZEmc5ml39econmDlTf6dEPYdu
c7Lg6TnkjwEjbOR4id4o+HXxKd46osqVA7jIFQ093BjO2Rr1x8dvBPGGfrZ6
prYZrN/UUwdLUdEIvSkmstvdF/qMadRYaLLU+qZdLrod553iQiMylHB6pwQV
oWYTU+U28i/mtg6VwvFYEDxqeKgIDnEYMispClHYNjorE0BHObkYqYNWAr9Y
zwPRNcLwhtObxSy12mHjqmYd32E5zsBNBGE+9e4BCACzsb048jmc6aaFN8dp
OvF2dSYJEg1TFXEHuV0UhXU07rOX7nPv/GagpB1GmVQIKKx8MAWH4u6hcwcI
7X5LqhHLlTEqmz/huBsifheJIpjUpOD/nZfqSPkNBLmdxLmuITrvxTjCrmf6
EYwqjIGxt2nPweyXItmmfQ2iUmmHt8OIr+BSbkxnVCBM7b02GCJVN7obVsH1
2ZD2KSzFph8cCJ9aNUGwv1O617saPMZ0j5j05XzUs4wrQy0NF8pFBUARiPSf
v1YFr0fUtoOC2SHmtIa+8HNdyioEHsJIwr7s5xc2HItKXYJp6+6PpRgOMC4Q
17Ioo+ANrXl+U9O7u8FAAO8ZABEBAAHCwHYEGAEIAAkFAmE+9e4CGwwAIQkQ
AnqQFw/frfUWIQSC/jHIhNDyXRE91GcCepAXD9+t9ZA8B/97t+LPvLvTc41U
37dTm8dAK1UUgvgJCdmu4U6selPQXny3BgKdJm9GT+absaVDV2+PT4HPDwlz
YjvZ025CZBATMicGPHkl9tI2JYzJdd7wuh4bnHeu96uLZdNl0djWoPPH8wEb
i/dytKlu2rkKEmzAXdhFfQZk2OVJj+Sh/n/z3zfu1fCba8LQHubH1TmfFFSJ
cBxVBEP+ZqLu8BiJOWWBnjUJ4LwfLCfA5dpf/tDxhrUYdHLPmExYlerBVSxX
DH4j+cCcVihevBh8RHFEEcUCUxdIdD0WcpLAedP+9sOTFTdjglaCqsHnAbS7
Wn8e4l2jP4K4bykkOVloMHidA5RT
=BBGF
-----END PGP PUBLIC KEY BLOCK-----



### Goals for potential features

back-end server database to be compatible with JS and python and ruby, with extensibility to postgresql, mysql, sqlite, and of course AWS S3.

This is based on a potential novel concept in AI/ML research whereby a master-slave relationship is set-up between two different AIs (in this sense a Server-Client relationship, respectively). In this sense the slave AI is the AI that undergoes immense training with large datasets undergoing transfer learning (generalising in-domain learning to out-of-domain learning), but the model-database is hosted on the master AI. That is we separate the "training"/"learning" from the knowledge. This happens in human society at large en masse in the case where one individual spends a lot of time and effort and resources to perform research, forms hypothesis, tests them with experiments, and then develops theories (approaching an approximation to Fundamental Scientific Law) before the mathematical model of the theory is taught in schools readily and quickly without having to repeat the immense learning task. 

Essentially this is what an AI is doing in the sense of training on an immense data-set, performing pattern recognition (which is all it is), and undergoing algorithmic biasing towards some essential categorisable characteristical measureable goals. Once this is done, the models can be exported and converted into any other equivalent AI design, and in certain cases to certain ranges of similarity in AI design architectures.


The issues are as follows - for Client-Side AI Output, the AI models must be exported to the client, thus this means we are restricted to having an App on the App Store / Play Store / etc. etc. or having a downloadable cross-platform app for Mac OS, Windows and Linux. ie this cannot be used on a web-server with the client-side compatibility, unless we have an extensive streaming equivalent to YouTube video datarates - being commonly 720p at 30 FPS or 1.24 GB per hour, or maximally 2160p at 60 FPS or 15.98 GB per hour. Which is actually quite nice, seeing as YOLOv7 the state-of-the-art object detection model is only 300 MB. However, holding all of that on, for example, a mobile device and maintaining it for continuous browsing capabilities all-the-while performing continuous AI-output operations.

But there is another task at hand, and that is the important theoretical development of what I would've called Transfer Learning if that name hadn't already been taken for what is actually Generalization Learning, we will have to call it Substitution Learning, whereby the learning is substituted to and from an off-server AI algorithm.

In my opinion, as AI primarily performs pattern-recognition, different activations are better suited for different tasks, thus an AGI would utilise many activation functions on many neuronal-subsets of any/each given layer, as well as utilising many pre-transformations of data feeding in parallel to each of the many activation functions, including say a Fourier Transform, or a Wavelet Transform, or a Derivative, and permutations of combinations of each. However, this is a huge over-head on computational resource intensity (read: cost), and so can only really be achieved by a Client-Side AI with CSide training and outputs.

## AI Substitution Learning

So, the (limited) definition of substitution learning is given in terms of masters and slaves. A master, M, consists of: a host model, H, and a host model architecture, A_M(h), where h is a 1D vector of a number of given layers, l, (the length of the number of vectoral components) each with a number of given neurons, n_l, represented in say a 3 layer network consisting of 256 neurons, 256 neurons, and 256 neurons, stacking successively on each layer, going down in the vertical 1D vector matrix. Whether the input data-type is a String, an Image, a gif, some Audio, a Video (with or without audio), or numbers, the architecture is essentially the same. However this architecture can be extended for complex configurations including having many inputs at many layers, amongst others unlisted. A slave, S, consists of: a client model, C, and a client model architecture A_S(c), where similarly c may or may not need to be equivalent to h, however with equivalency this is a trivial solution to what could be extended to a much larger problem.

The trick becomes where the slave must transfer the client model learning from the client model architecture to the host model architecture and teach the host model what it has learnt. Now this has been done in the sense of Adversarial AI, whereby certain operations are performed on given data to try and trick the primary AI, and in another sense by Graph HyperNetworks where an overlord AI pre-trains a desired AI for a given task, but must be done by training 1000s of networks.

Potential progress can be made by using an 'inference' to, once say 100 iterations of training has been performed on a potential mobile device without an app just in the background while browsing a given web-page, by using an 'inference' to look at the starting weights of the fresh AI built on web-page load, and looking at the ending weights of once a delimiter time-frame or iteration-number has been reached (depending on the webpage content, for example if the client is watching a long video, then the threshold can be increased, or perhaps we can perform regular interval-checks of utilising what is essentially a save-point, to upload new so-far-learnings before the user leaves the page, however, lost learning is not a cost to the platform-host / server / master). And once the delimiter is reached we can compare initial weights to end weights and work out how to communicate that learning back to the host model. A lot of learning requires looping, ie one neuron on one layer will increase in the first iteration, leading to neurons in the second layer to develop, and then that same first single neuron on the first layer will then decrease in the next iteration, until learnings propogate up all levels and values solidify on marginal changes.


## Roadmap

So the task at hand is to build the base neural networks with set activation functions, and easy customisability of activation functions to include the potential for novel activation functions for say the hyperbolic arc sin, or the hyperbolic (representing how Mice brains have now been measured to record spatial data, according to Nature 2023), which can be done through ready class inheritence perhaps, or even a custom method storing a given equation for the activation function and a given equation for its derivative function (as we've learnt that these are not 1:1 guaranteed implicatives, and alcalculus will need further modification for given assumptional characteristics of known datatypes), as well as configurable layer subsets each with unique activation functions, as well as transformers and multi-modal tokenizers (words, characters, subwords, which we'll then have to modify and extend to include the notion that the same word can have different definitions in different contexts, even within a single sentence).


### Other Theoretical Advances

#### Speaker-authentication to speaker-authenticaion AI

It is one thing to be able to identify what a person is saying with speech recognition, but to be able to essentially create an Adversarial AI, such that you can pass authentication as any other speaker.

#### AI-to-AI AI

AI primarily works with data and conversion of data from one form to another. Pattern recognition. So I posit, what if we could have an AI that could pass data from the training models/architecture of one AI to the to the training models/architecture of another AI. Essentially all it would need is the code and the models, and the datasets, it would be able to convert the model-learning based on dataset performance, to another dataset to train another AI, or to pre-train another AI, or to take in the new AI's code and models, and add the learning to it. What this final one does is converts the training from one AI into *generalising* another AI. `AGGI: Artificial General Generalizer Intelligence.`

#### FaceID to FaceID AI.

I don't need to explain this, but it takes in your face-verification and converts it to someone else's.

#### N-D probabilistics with AI

Instead of Assuming that probabilities are 1-dimensional, ie the probability that X happens is 95%, misses out on all the other information. Probabilities are measured statistics. Thus their dimensionality depends on the variation of the object(s) being measured. Thus saying "this image is 93% chance of being a tortoise" (as most AI's tend to work with), is forcing the dimensional constraint to be a single number for all possibile trained-on categories. However, it is clear to see that if you train it on a different image, then the probabilities change. 

So what if we were to look at possible image-filter analysis, such as colour bleeding, blur, median filter, laplacian, gaussian, average filter, box filter, weighted-average filter, minimum filter, maximum filter, derivative filter, low-pass filter, high-pass filter, band-pass filter, butter-worth filter, resolution, sepia engraving, lens flare, warhol-type-effect, radial blur, manga rays effect, dark light effect, composite image effect, duatone effect, psychedelic watercolor, rough sketch... 

it still needs to be able to recognise that image under all the possible filters. And thus instead of testing it out on each, it should give a probability of detecting it under other filters, and the probability of detecting if it has been subject to a filter. 

Then it also needs to be able to give an output of the probability of when the image was taken, and where the image was taken, whether the image was taken on a tripod or a gyroscope or by-hand or other. It needs the probability that the image was cut from a video, or if the image represents a moving object, and so on and so forth.

Most of these values are impossible to provide a measured-statistic for, so `probability is a meaningless term in that regard`, just as for when the comparative variables illustrate an indistinguishability between the many options, ie how are you ever going to train an AI to determine if an image was an original or from the product of copy-paste. Also, if you train an AI to recognise a banana from all the different images of a banana, then for all the correct predictions it makes, the different bananas are essentially identical to it, as in, they are indistinguishable.

To correctly train an AI it would need to take in N-Dimensions of variables, where N is itself N-Dimensional ((where N is itself N-Dimesional)^N where N is itself N-Dimesional^N and so on and so forth), but we can't even make it to N-Dimensions where N is just the first cardinality of infinity, aleph-naught. This is why "complexity" "progress" "advancement" and "exponential growth as we move to the future" are complete misnomers, we still know nothing and we will always know nothing. Not only would it need to take in N-Dimesions, it would need to output N-Dimensions.

#### Inconsistency / Invalidity / Self-refuting idea of AGI

AGI is supposedly an artificial intelligence that is generalised across domains. It knows how to do anything at any time, and can complete any task. The idea of AGI is about an AI that can convert text-to-image, image-to-text, text-to-text, predict conversations, audio-to-video, etc etc. It can do it all. 

But all possibility is at hand. Which means that for any given task, there is also it's counter task, not just the opposite task, but a counter task. A counter task is the task that challenges the progresses made in completing the referred-to task. As in an AI that is trained on doing good, will not be able to complete the task of doing evil. An AI that is trained on recognising the similarities between objects will not be able to complete the task of shunning similarities between objects. Not unless there is a choice variable and a sub-domain selector, as in you task it with what you would like it to do, and when that happens it must be able to `select it's weights` or `select it's connections` or `turn off it's own neurons`. An AGI must participate in active self-disabilitation procedures. When you train it on how to do something, you must also train it on how not to do that same something. Which cannot be done on the same network, which means it must know in advance that you are telling it to turn parts of itself off. Because normally with an AI everything flows from input to output, and judging on performance it follows a particular pattern recognition algorithm to improve its performance. But if you are using the same input-to-output ideal on the same AGI network, it will not be able to do it, unless you train it on knowing the meta-knowledge of what the task is, and how it is being judged.




#### Needs and Guidelines for skipjacks

The first layer should be of neuron size equal to the range of possible input values ie 256x256x256 colours should have 256x256x256 neurons per pixel. This way the maximal amount of fidelity an AI can have is dependent on the maximal amount of sensitivity to the possibility range ie. For each possible input possibility there exists a uniquely-independent measurably-identifiable pattern between it and the rest of the possible inputs, as well as the rest of possible uniquely-independent measurably-identifiable patterns for the sum of the rest of the possible inputs. After that, any addition of new layer-based-complexity-requirements\* could be mitigated by improving the specification on "Activation Functions". As a corollary: any learning-approximators could skip a relatively-infinite amount of steps taken to learn from a set of data by iterating over it at all. As this can be modelled by an input range of [0,1] for each pixel, and one pixel, and thus one output range of [0,1]; by substitution for a,b,c, instead of 0,1,no. of pixels, respectively: it would only be obvious to say that as (a\*b)^c gets bigger the fidelity gets better, and as each of a,b,c, get bigger each then (a\*b)^c would also get bigger, and as the specificity of the learning approximator was such that it would approximate to exactly learn the pattern from each individual training-data-unit, as long as the activation function is representative of the discretised-potential-range of pre-configured signal filters (perhaps a non-relative-scale-symmetric series of cascading band-pass filters (ie. object categorisations in an image are dependent on the categorisations of the other objects' scale)).


layer-based-complexity-requirements\* As each first layer is the on-off spectral distribution of learnings based on each possible input per neuron, each second layer is the on-off spectral distribution of learnings based on each prior on-off spectral distributions. A secondary on-off spectral distribution is equivalent to a learned pattern, and needs to have the possible input range of the possible input range (meaning instead of (256x256x256)^(no. of pixels), it would need to be (float-size of the weight)^(no of prior input possibilities), unless it of course depends on an (space-with(union)-orientation)-symmetry potential defined by ((horizontal)+(vertical)+(discrete-dimensional-dependent-diagonal-symmetry\*) ones on each layer exclusive of all other layes.



discrete-dimensional-dependent-diagonal-symmetry\* ie. symmetries that can be shifted out to always solve for skip-you functions of trivial-symmetries, ie. discretization of continuous-rotational symmetries skipping all that don't resolve to a functional value outside of the possible-input-range simultaneous centroid (as each is a duopoly of what we WANT for maximal-detailable pattern-recognising potential, which applies REGARDLESS of training data size (as you can see while stable-diffusion and chatGPT might be over-achievers of creativity-based applications, if it were to do data-bit-range-potential it-could-do-anything))