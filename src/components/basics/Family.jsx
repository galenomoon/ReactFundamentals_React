import React, { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {/* All child has parent's proprieties*/}
      {React.Children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};
