import React from "react";

//Making the props to send to parent via props
export default (props) => {
  const cb = props.whenClick;
  let nerd = false;
  const generateAge = () => parseInt(Math.random() * 20) + 50;
  let generateNerd = () => Math.random() > 0.5;
  return (
    <div>
      <h3>Child</h3>
      {/*Getting the ⤵ function via props and showing it in the console*/}
      <button onClick={(_) => cb("Jinny", generateAge, generateNerd)}>
        Give Information
      </button>
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
                information                  to father
                        ↸                      ↲
                      Parent information
                      is queried and loaded 
                      by the child function
*/
