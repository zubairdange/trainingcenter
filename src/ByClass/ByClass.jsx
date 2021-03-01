import React, { Component } from "react";
import Person from "../ByFunctional/Person/Person";
class ByClass extends Component {
  state = {
    persons: [
      { name: "zubair", age: 30 },
      { name: "umer", age: 28 },
      { name: "Junaid", age: 35 },
    ],
  };
  setState = {
    persons: [
      { name: "Dange", age: 33 },
      { name: "muzammil", age: 31 },
      { name: "tauseef", age: 30 },
    ],
  };
  render() {
    return (
      <div>
        <h3>By Using Class Component</h3>;
        <br />
        <div>
          <h3>By Using Functional Component</h3>
          <h1>Welcome to reactjs</h1>
          <p>Tis is really works</p>
          {/* <button onClick={this.switchNameHandler}>switch name</button>
          <Person name={this.persons[0].name} age={this.persons[0].age} />
          <Person name={this.persons[1].name} age={this.persons[1].age} />
          <Person
            name={this.persons[2].name}
            age={this.persons[2].age}
            click={this.switchNameHandler}
          >
            my Hobbies:Playing
          </Person> */}
        </div>
      </div>
    );
  }
}

export default ByClass;
