import React from "react";

export default (props) => {
  return (
    <div>
      <button onClick={props.setInc}>+1</button>
      <button onClick={props.setDec}>-1</button>
    </div>
  );
};
