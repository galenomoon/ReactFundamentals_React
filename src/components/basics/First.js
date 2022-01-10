import React from "react";

export default function First() {
  //This function could be anonymous, but would still work
  const msg = 'Welcome'
  return ( //to keep the code indented
    <div>
      <h2>First Component</h2> {/*JSX with a function JS*/}
      <p>
          {msg}
      </p>
    </div>
  );
}
