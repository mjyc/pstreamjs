// generated using from https://github.com/probmods/webppl/blob/959c9ae0e3fb638b58186f46b057750fad986544/scripts/distHeader
// This file was automatically generated by 'scripts/distHeader'.
"no caching";
var Bernoulli = dists.makeBernoulli;
var bernoulli = function(arg0) {
  var params = util.isObject(arg0) ? arg0 : { p: arg0 };
  return sample(Bernoulli(params));
};
var Beta = dists.makeBeta;
var beta = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { a: arg0, b: arg1 };
  return sample(Beta(params));
};
var Binomial = dists.makeBinomial;
var binomial = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { p: arg0, n: arg1 };
  return sample(Binomial(params));
};
var Categorical = dists.makeCategorical;
var categorical = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { ps: arg0, vs: arg1 };
  return sample(Categorical(params));
};
var Cauchy = dists.makeCauchy;
var cauchy = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { location: arg0, scale: arg1 };
  return sample(Cauchy(params));
};
var Delta = dists.makeDelta;
var delta = function(arg0) {
  var params = util.isObject(arg0) ? arg0 : { v: arg0 };
  return sample(Delta(params));
};
var DiagCovGaussian = dists.makeDiagCovGaussian;
var diagCovGaussian = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { mu: arg0, sigma: arg1 };
  return sample(DiagCovGaussian(params));
};
var Dirichlet = dists.makeDirichlet;
var dirichlet = function(arg0) {
  var params = util.isObject(arg0) ? arg0 : { alpha: arg0 };
  return sample(Dirichlet(params));
};
var Discrete = dists.makeDiscrete;
var discrete = function(arg0) {
  var params = util.isObject(arg0) ? arg0 : { ps: arg0 };
  return sample(Discrete(params));
};
var Exponential = dists.makeExponential;
var exponential = function(arg0) {
  var params = util.isObject(arg0) ? arg0 : { a: arg0 };
  return sample(Exponential(params));
};
var Gamma = dists.makeGamma;
var gamma = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { shape: arg0, scale: arg1 };
  return sample(Gamma(params));
};
var Gaussian = dists.makeGaussian;
var gaussian = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { mu: arg0, sigma: arg1 };
  return sample(Gaussian(params));
};
var ImproperUniform = dists.makeImproperUniform;
var IspNormal = dists.makeIspNormal;
var ispNormal = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { mu: arg0, sigma: arg1 };
  return sample(IspNormal(params));
};
var KDE = dists.makeKDE;
var Laplace = dists.makeLaplace;
var laplace = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { location: arg0, scale: arg1 };
  return sample(Laplace(params));
};
var LogNormal = dists.makeLogNormal;
var logNormal = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { mu: arg0, sigma: arg1 };
  return sample(LogNormal(params));
};
var LogisticNormal = dists.makeLogisticNormal;
var logisticNormal = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { mu: arg0, sigma: arg1 };
  return sample(LogisticNormal(params));
};
var LogitNormal = dists.makeLogitNormal;
var logitNormal = function(arg0, arg1, arg2, arg3) {
  var params = util.isObject(arg0)
    ? arg0
    : { mu: arg0, sigma: arg1, a: arg2, b: arg3 };
  return sample(LogitNormal(params));
};
var Marginal = dists.makeMarginal;
var Mixture = dists.makeMixture;
var mixture = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { dists: arg0, ps: arg1 };
  return sample(Mixture(params));
};
var Multinomial = dists.makeMultinomial;
var multinomial = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { ps: arg0, n: arg1 };
  return sample(Multinomial(params));
};
var MultivariateBernoulli = dists.makeMultivariateBernoulli;
var multivariateBernoulli = function(arg0) {
  var params = util.isObject(arg0) ? arg0 : { ps: arg0 };
  return sample(MultivariateBernoulli(params));
};
var MultivariateGaussian = dists.makeMultivariateGaussian;
var multivariateGaussian = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { mu: arg0, cov: arg1 };
  return sample(MultivariateGaussian(params));
};
var Poisson = dists.makePoisson;
var poisson = function(arg0) {
  var params = util.isObject(arg0) ? arg0 : { mu: arg0 };
  return sample(Poisson(params));
};
var RandomInteger = dists.makeRandomInteger;
var randomInteger = function(arg0) {
  var params = util.isObject(arg0) ? arg0 : { n: arg0 };
  return sample(RandomInteger(params));
};
var SampleBasedMarginal = dists.makeSampleBasedMarginal;
var TensorGaussian = dists.makeTensorGaussian;
var tensorGaussian = function(arg0, arg1, arg2) {
  var params = util.isObject(arg0)
    ? arg0
    : { mu: arg0, sigma: arg1, dims: arg2 };
  return sample(TensorGaussian(params));
};
var TensorLaplace = dists.makeTensorLaplace;
var tensorLaplace = function(arg0, arg1, arg2) {
  var params = util.isObject(arg0)
    ? arg0
    : { location: arg0, scale: arg1, dims: arg2 };
  return sample(TensorLaplace(params));
};
var Uniform = dists.makeUniform;
var uniform = function(arg0, arg1) {
  var params = util.isObject(arg0) ? arg0 : { a: arg0, b: arg1 };
  return sample(Uniform(params));
};