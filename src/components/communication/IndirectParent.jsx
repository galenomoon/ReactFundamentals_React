import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

// It's a Indirect
//⤵ communication, cause it's done parent-to-child
export default (props) => {
  // useState receive two values
  // like this: ⤵ | [value, function]
  const [a, b] = [1, 2];
  const [name, setName] = useState("?");
  const [age, setAge] = useState(0);
  const [nerd, setNerd] = useState(false);

  function giveInformation(name, age, nerd) {
    // ⤵ Here we're calling the value via function
    setName(name); // [name, setName]
    setAge(age); // [age, setAge]
    setNerd(nerd); // [nerd, setNerd]
  }

  return (
    <div>
      <span>{name} </span>
      <span>{age}</span>
      <span> {nerd ? "True" : "False"}</span>
      <IndirectChild whenClick={giveInformation}></IndirectChild>
    </div>
  );
};

/*
================== HOW WORKS INDIRECT COMMUNICATION ===================
           
                FATHER => FunctionToSon() => SON 
                                              ⤵
                                              Get de function
                                              and for a event 
                Father get                   send a information
                information                      to father
                        ↸                           ↲
                            Parent information
                            is queried and loaded 
                            by the child function
*/
