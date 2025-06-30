import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button text="Click Me" />
      <Button onClick={() => alert("Okey!!")} text="Click Me Again" />
    </div>
  );
}

export default App;
