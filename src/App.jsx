import React from "react";
import First from "./components/basics/First"; //Exporting JS elements, if First was called "Dagoberto", would still work (only if the <First> tag is renamed)
import WithParams from "./components/basics/WithParams";
import Fragment from "./components/basics/Fragment";
import Random from "./components/basics/Random";
import Card from "./components/Layout/Card";
import "./components/App.css";

export default () => (
  // _, (), props, (props) | This function only takes ONE parameter, so we can use UNDERLINE (_) to say that to the code
  // Or you can use "<React.Fragment><React.Fragment/>""
  <div className="App">
    <h1>React Fundamentals</h1>

    <div className="cards">
      <Card title="#01 - First Component" color="#FA6900">
        <First></First>
      </Card>

      <Card title="#02 - With Params" color="#E94C6F">
        {/*Here ⤵ I'm generating two props with their respective values, and in WithParams.jsx calling it for interpolation*/}
        <WithParams
          title="Student's Situation"
          studentName="Peter"
          studentScore={9.3}
        />
      </Card>

      <Card title="#03 - Fragment" color="#E8B71A">
        <Fragment />
      </Card>

      <Card title="#04 - Random Number Challenge" color="#588C73">
        <Random minimalValue={0} maxValue={60} />
      </Card>
    </div>
  </div>
);
