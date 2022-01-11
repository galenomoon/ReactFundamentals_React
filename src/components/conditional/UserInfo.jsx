import React from "react";
import If from "./If";

export default (props) => {
  const user = props.user || {};
  return (
    <div>
      <If test={user && user.name}>
        Welcome <i>{user.name}</i>!
      </If>
      <If test={!user || !user.name}>
        Welcome <i>Bro</i>!
      </If>
    </div>
  );
};
