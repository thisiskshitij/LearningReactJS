import { useState } from "react";

function MyComponent() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("Guest");

  const updateName = () =>{
    setName("Kirito");
  }

  const incrementAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <p>Name: {name} </p>
      <button onClick={updateName}> Update name </button>

      <p>Age: {age} </p>
      <button onClick={incrementAge}> Increment Age </button>
    </div>
  );
}

export default MyComponent;
