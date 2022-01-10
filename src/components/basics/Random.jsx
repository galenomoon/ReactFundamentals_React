import React from "react";

export default (props) => {
  const [min, max] = [props.minimalValue, props.maxValue];
  const numberRandom = Math.floor(Math.random(min) * max);

  return (
    <>
      <p>
        <b>Minimal Value:</b> {min}
      </p>
      <p>
        <b>Max Value:</b> {max}
      </p>
      <h2>
        <b> the Value Drawn was </b>{numberRandom}
      </h2>
    </>
  );
};
