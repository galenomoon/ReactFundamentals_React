import React from "react";
import MemberFamily from "./MemberFamily";

export default (props) => {
  return (
    <div>
      <MemberFamily name="Peter" lastName={props.lastName}/> {/*You can invoke parent element proprieties */}
      <MemberFamily name="Edward" {...props}/> {/*SPREAD (...) | {...props} spreads all proprieties of parent element to children element */}
      <MemberFamily name="Barry" lastName="Allen"/>
    </div>
  );
};
