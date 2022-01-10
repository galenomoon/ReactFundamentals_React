import React from "react"; //Syntax JSX

export default function WithParams(props) {
  //Using props (proprieties) like params

  const status = props.studentScore >= 7 ? "Approved" : "Disapproved";
  return (
    // ⤵ Params are used for "{variable.paramName}"
    <div>
      <h2>{props.title}</h2>
      <p>
        <b> {props.studentName}</b>'s score is{" "}
        <b>
          {props.studentScore} and was {status}!
        </b>
      </p>
      <hr></hr>
    </div>
  );
}
