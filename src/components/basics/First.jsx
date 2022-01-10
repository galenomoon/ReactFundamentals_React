import React from "react";

// This function ⤵ could be anonymous, but would still work
export default function First() {
  const msg = "Welcome";
  return (
    // "()" To keep the code indented
    <div>
      <h2>First Component</h2> {/*JSX with a function JS*/}
      <p>{msg}</p>
    </div>
  );
}
