const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>
        my name is {props.name} and my age is {props.age} years old
      </p>
      <p>{props.children}</p>
    </div>
  );
};
export default person;
