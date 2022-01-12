import React, { useState } from "react";
import "./Input.css";

export default (props) => {
  const [value, setValue] = useState("Initial");

  // Don't change the data through the graphical interface,
  //   ⤵ but receive value only from data received via State

  function whenChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{value ? value : "Type a text"}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <br></br>
        <h3>Controlled (onChange)</h3>
        <input value={value} onChange={whenChange} />
        <h3>Controlled (readOnly)</h3>
        <input value={value} readOnly />
        <h3>Uncontrolled (undefined)</h3>
        <input value={undefined} />
      </div>
    </div>
  );
};

// ONLY(State => Graphical Interface)| CONTROLLED COMPONENTS
// Graphical Interface => State | UNCONTROLLED COMPONENTS
