if (process.argv.length < 3) {
  console.error("usage: node repair.js {progFilename}");
  exit(1);
}

const fs = require("fs");

// read files
const progFilename = process.argv[2];
const progCode = fs
  .readFileSync(progFilename, "utf8")
  .match(/module\.exports = .*/s)[0]
  .replace("module.exports = ", "const makeProgram = ");

const streamsFilename = "./node_modules/pstreamjs/wppl/pstream.wppl.js";
const streamsCode = fs
  .readFileSync(streamsFilename, "utf8")
  .replace(/const .+ = require\(\".+\"\);/s, "")
  .replace(/module.exports = {.+};/s, "")
  .replace(/module.exports = .+;/s, "");

const modelCode = `
const model = function() {
  const params = {
    minNoseAngle: gaussian(-0.5, 0.1),
    maxNoseAngle: gaussian(0.5, 0.1),
  };

  const Program = makeProgram(params);
  const progInput = {
    noseAngleStamped: [
      {stamp: 1, value: {stamp: 1, theta: 0}},
      {stamp: 2, value: {stamp: 2, theta: 0}},
      {stamp: 3, value: {stamp: 3, theta: 1}},
      {stamp: 4, value: {stamp: 4, theta: 1}}
    ]
  };
  const progOutput = Program(progInput);

  map((out) => {
    factor(out.value.state === true ? 0 : -Infinity);
  }, progOutput.slice(1))

  return params;
}

Infer({method: 'MCMC', samples: 100}, model);
`;

// transpile
const inputCode = streamsCode + progCode + modelCode;

const babel = require("@babel/core");
let code;
try {
  code = babel.transform(inputCode, {
    plugins: [
      "@babel/plugin-transform-arrow-functions",
      "@babel/plugin-transform-destructuring",
      "@babel/plugin-transform-parameters",
    ],
  }).code;
} catch (err) {
  console.error("Possibly invalid wppl input code", code);
  console.error("babel.transform error", err);
}

// run code in wppl
let e;
const wppl = require("webppl");
try {
  wppl.run(code, (_, x) => {
    console.log("x", x);
  });
} catch (err) {
  e = err;
  console.error("Possibly invalid wppl input code", code);
  console.error("webppl.run error", !!err.toString ? err.toString() : err);
}
