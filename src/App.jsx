import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./counter";
import User from "./Users";

function App() {
  const clicked = () => {
    alert("Button Clicked");
  };

  const addition = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Explore React</h1>

      <User></User>

      <Counter></Counter>

      <button onClick={clicked}>Click Me</button>
      <button onClick={() => addition(3)}>Add to five</button>
    </>
  );
}

export default App;
