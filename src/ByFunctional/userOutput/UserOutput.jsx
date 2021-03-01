import React from "react";
import "./UserOutput.css";
const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>userName:{props.UserName}</p>
      <p>I hope I`will overwritten!</p>
    </div>
  );
};
export default UserOutput;
