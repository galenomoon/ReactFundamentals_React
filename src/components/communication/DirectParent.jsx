import React from "react";
import DirectChild from "./DirectChild";

// A Child-to-parent communication is
//done via props ⤵
export default (props) => {
  // It's a direct communication because it's done child-to-parent
  return (
    <div>
      <DirectChild name="Barry" age={20} nerd={true}></DirectChild>
      <DirectChild name="Jacob" age={17} nerd={false}></DirectChild>
    </div>
  );
};
