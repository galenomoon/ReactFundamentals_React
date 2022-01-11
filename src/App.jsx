import React from "react";
import First from "./components/basics/First"; //Exporting JS elements, if First was called "Dagoberto", would still work (only if the <First> tag is renamed)
import WithParams from "./components/basics/WithParams";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/Layout/Card";

export default () => (
  // _, (), props, (props) | This function only takes ONE parameter, so we can use UNDERLINE (_) to say that to the code
  // Or you can use "<React.Fragment><React.Fragment/>""
  <div id="app">
    <h1>React Fundamentals</h1>

    <Card title="#04 - Random Number Challenge">
      <Random minimalValue={0} maxValue={60} />
    </Card>

    <Card title="#03 - Fragment">
      <Fragment />
    </Card>

    <Card title="#02 - With Params">
      {/*Here ⤵ I'm generating two props with their respective values, and in WithParams.jsx calling it for interpolation*/}
      <WithParams
        title="Student's Situation"
        studentName="Peter"
        studentScore={9.3}
      />
    </Card>

    <Card title="#01 - First Component">
      <First></First>
    </Card>
  </div>
);
