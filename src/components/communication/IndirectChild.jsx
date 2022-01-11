import React from "react";

//Making the props to send to parent via props
export default (props) => {
  const cb = props.whenClick;
  return (
    <div>
      <h3>Child</h3>
      {/*Getting the ⤵ function via props and showing it in the console*/}
      <button onClick={(_) => cb("Jhonny", 53, true)}>Give Information</button>
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
          ↸                      ↲
        Parent information
        is queried and loaded 
        by the child function

*/
