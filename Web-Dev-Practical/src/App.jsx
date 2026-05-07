import React from "react";
import Child from "./Child.jsx";
import Api from "./Api.jsx";


function App() {
  const name = 'Sushant';
  const age = 19;

  return (
    <div>
      <h1>Parent Component</h1>

      <Child name={name} age={age} />

      <h1>Fetch Api</h1>
      <Api />
    </div>
  );
}
export default App;

     
