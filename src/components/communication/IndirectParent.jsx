import React from "react";
import IndirectChild from "./IndirectChild";

// It's a Indirect ⤵ communication, cause it's done parent-to-child
function giveInformation(name, age, nerd) {
  console.log(name, age, nerd);
}
export default (props) => {
    let name = '?';
    let age = 0;
    let nerd = false;
  return (
    <div>
      <span>{name} </span>
      <span>{age}</span>
      <span> {nerd ? 'True' : 'False'}</span>
      <IndirectChild whenClick={giveInformation}></IndirectChild>
    </div>
  );
};

/*
FATHER => FunctionToSon() => SON 
                                ⤵
                                Get de function
                                and for a event 
  Father get                   send a information
  information                  to father
        ↸                        ↲
        Parent information
        is queried and loaded 
        by the child function

*/

