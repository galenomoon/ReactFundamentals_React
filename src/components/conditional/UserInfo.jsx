import React from "react";
import If, {Else} from "./If";

export default (props) => {
  const user = props.user || {};
  return (
    <div>

      {/* <If test={user && user.name}>
        Welcome <i>{user.name}</i>!
      </If>

      <If test={!user || !user.name}>
        Welcome <i>Bro</i>!
      </If> */}

      <If test={user && user.name}>
          
        Welcome <i>{user.name}</i>!

        <Else>

            Welcome <i>Bro</i>!

        </Else>

      </If>

    </div>
  );
};
