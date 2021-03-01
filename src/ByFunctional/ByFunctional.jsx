import React, { useState } from "react";
import Person from "./Person/Person";
import UserData from "./UserData/UaerData";
const ByFunctional = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "zubair", age: 30 },
      { name: "umer", age: 28 },
      { name: "Junaid", age: 35 },
    ],
  });
  const switchNameHandler = () => {
    console.log("was cliicked");
    setPersonState({
      persons: [
        { name: "Dange", age: 33 },
        { name: "muzammil", age: 31 },
        { name: "tauseef", age: 30 },
      ],
    });
  };

  return (
    <div>
      <h3>By Using Functional Component</h3>
      <h1>Welcome to reactjs</h1>
      <p>Tis is really works</p>
      <button onClick={switchNameHandler}>switch name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
        click={switchNameHandler}
      >
        my Hobbies:Playing
      </Person>
      <UserData />
    </div>
  );
};

export default ByFunctional;
