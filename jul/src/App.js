import React from "react";
import "./App.css";
import "../src/components/Card.css";
import "./components/style.css";
import Starts from "./components/Starts.jsx";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <div>
        <Cards></Cards>
      </div>

      <div>
        <Starts></Starts>
      </div>
    </div>
  );
}

export default App;
