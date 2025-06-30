import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { CounterProvider } from "./providers/Counter";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Button text="Click Me" />
      </CounterProvider>
    </div>
  );
}

export default App;
