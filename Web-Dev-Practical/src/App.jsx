import React from "react";
import Child from "./Child.jsx";


function App() {
  const name = 'Sushant';
  const age = 19;

  return (
    <div>
      <h1>Parent Component</h1>

      <Child name={name} age={age} />
    </div>
  );
}
export default App;

     
