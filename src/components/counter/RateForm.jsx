import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="rateInput">Rate: </label>
      <input
        id="rateInput"
        type="number"
        value={props.rate}
        onChange={e => props.setRate(+e.target.value)}
      ></input>
    </div>
  );
};
