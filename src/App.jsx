import React from "react";
import First from "./components/basics/First"; //Exporting JS elements, if First was called "Dagoberto", would still work (only if the <First> tag is renamed)
import WithParams from "./components/basics/WithParams";
import Fragment from "./components/basics/Fragment";

export default () => (
  // _, (), props, (props) | This function only takes ONE parameter, so we can use UNDERLINE (_) to say that to the code
  // Or you can use "<React.Fragment><React.Fragment/>""
  <div id="app">
    <h1>React Fundamentals</h1>
    <Fragment />
    {/*Here ⤵ I'm generating two props with their respective values, and in WithParams.jsx calling it for interpolation*/}
    <WithParams
      title="Student's Situation"
      studentName="Peter"
      studentScore={9.3}
    />
    <First></First>
  </div>
);
