import React from "react"; //Syntax JSX

export default function WithParams(props) { //Using props (proprieties) like params
  return ( // ⤵ Params are used for "{variable.paramName}" 
    <div>
      <h2>{props.title}</h2> 
      <p>{props.subtitle}</p>
    </div>
  );
}
