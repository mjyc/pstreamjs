const {
  scan: p$scan,
  distinctUntilChanged: p$distinctUntilChanged,
} = require("pstreamjs");

module.exports = function({
  stamp0 = 0,
  minNoseAngle = -0.785398,
  maxNoseAngle = 0.785398,
} = {}) {
  return (sources) => {
    const noseAngleStamped$ = sources.noseAngleStamped;
    const stateStamped$ = p$distinctUntilChanged(
      (a, b) => a.state === b.state,
      p$scan(
        (prev, noseAngleStamped) => {
          if (
            prev.state === true &&
            (noseAngleStamped.theta < minNoseAngle ||
              noseAngleStamped.theta > maxNoseAngle)
          ) {
            return {
              stamp: noseAngleStamped.stamp, //sources.Time._time(),
              state: false,
            };
          } else if (
            prev.state === false &&
            noseAngleStamped.theta > minNoseAngle &&
            noseAngleStamped.theta < maxNoseAngle
          ) {
            return {
              stamp: noseAngleStamped.stamp, //sources.Time._time(),
              state: true,
            };
          } else {
            return {
              stamp: prev.stamp,
              state: prev.state,
            };
          }
        },
        {
          stamp: stamp0,
          state: false,
        },
        noseAngleStamped$
      )
    );
    return stateStamped$;
  };
};
