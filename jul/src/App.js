import React from "react";
import "./App.css";
import "../src/components/Card.css";
import "./components/style.css";
import Starts from "./components/Starts.jsx";
import data from "./components/data";

function App() {
  return (
    <div className="App">
      <div>
        <p className="titulo">Creemos un lindo recuerdo de nuestro amor</p>
      </div>
      <div>
        <Starts></Starts>
      </div>
      <div className="main">
        {data.home.map((e, i) => (
          <div key={i} className="contenedor-card">
            <img className="im" src={e} alt="" />
          </div>
        ))}
      </div>
      <div>
        <Starts></Starts>
      </div>
    </div>
  );
}

export default App;
