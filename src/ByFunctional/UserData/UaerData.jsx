import React, { Component } from "react";
import UserOutput from "../userOutput/UserOutput";
import UserInput from "../UserInput/UserInput";

class UserData extends Component {
  state = {
    userName: "Ahmed",
  };
  userNameChangeHandler = (e) => {
    this.setState({ userName: e.target.value });
  };
  render() {
    return (
      <div>
        <UserInput
          changed={this.userNameChangeHandler}
          CurrentName={this.state.userName}
        />
        <UserOutput UserName={this.state.userName} />
        <UserOutput UserName={this.state.userName} />
        <UserOutput />
      </div>
    );
  }
}

export default UserData;
