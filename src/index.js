import "./index.css"; //Importing CSS
import ReactDOM from "react-dom"; //Importing ReactDom | Document Object Model
import React from "react"; //Syntax JSX

import First from "./components/basics/First"; //Exporting JS elements, if First was called "Dagoberto", would still work (only if the <First> tag is renamed)
import WithParams from "./components/basics/WithParams";
import Fragment from "./components/basics/Fragment";

ReactDOM.render(
  // ⤵  Or you can use "<React.Fragment><React.Fragment/>""
  <>
    {/*Here ⤵ I'm generating two props with their respective values, and in WithParams.jsx calling it for interpolation*/}
    <First></First>
    <WithParams
      title="Student's Situation"
      studentName="Peter"
      studentScore={9.3}
    />

    <WithParams
      title="Student's Situation"
      studentName="Michele"
      studentScore={9.7}
    />

    <WithParams
      title="Student's Situation"
      studentName="Flash"
      studentScore={6.1}
    />
  </>,
  document.getElementById("root")
);
