import "./index.css"; //Importing CSS
import ReactDOM from "react-dom"; //Importing ReactDom | Document Object Model
import React from "react"; //Syntax JSX
import First from "./components/basics/First"; //Exporting JS elements
import WithParams from "./components/basics/WithParams";
//If First was called "Dagoberto", would still work (only if the <First> tag is renamed)

// #Examples Fundamentals of React ⤵
/*
const el = document.getElementById("root"); //Getting the element by id 'root'
ReactDOM.render(<div> Hello </div>, el); // and rendering it in that element

//But, you can make it directly like this
ReactDOM.render(
  <div>
<b>React! {/* Using JSX to render HTML tag's in JS */ /*}</b>
  </div>,
  document.getElementById("root2")
);

//You can make this using a variable like this:
const tag = <h1>Let's go</h1>;
ReactDOM.render(<div>{tag}</div>, document.getElementById("root3"));
*/

ReactDOM.render(
  // Here ⤵ I'm generating two props with their respective values, and in WithParams.jsx calling it for interpolation
  <div>
    <First></First>
    <WithParams title="Student's Situation" studentName="Peter" studentScore={9.3} />
 
    <WithParams title="Student's Situation" studentName="Michele" studentScore={9.7} />

    <WithParams title="Student's Situation" studentName="Flash" studentScore={6.1} />
  </div>,
  document.getElementById("root")
);
