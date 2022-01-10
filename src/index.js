import ReactDOM from "react-dom"; //Importing ReactDom | Document Object Model
import React from "react"; //Syntax JSX

const el = document.getElementById("root"); //Getting the element by id 'root'
ReactDOM.render(<div> Olá </div>, el); // and rendering it in that element

//But, you can make it directly like this
ReactDOM.render(
  <div>
    <b>React! {/* Using JSX to render HTML tag's in JS */}</b>
  </div>,
  document.getElementById("root2")
);

//You can make this using a variable like this:
const tag = <h1>Let's go</h1>;
ReactDOM.render(<div>{tag}</div>, document.getElementById("root3"));
