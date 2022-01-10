import React from "react";

export default (props) => {
    
  const [min, max] = [props.minimalValue, props.maxValue];
  const numberRandom = Math.floor(Math.random(min) * max);

  return (
    <>
      <p>Minimal Value: {min}</p>
      <p>Max Value: {max}</p>
      <h2>
        the Value Drawn was <b>{numberRandom}</b>
      </h2>
      <hr></hr>
    </>
  );
};
