import { useState } from "react";
import "./App.css";

function App() {
  let [contador, setContador] = useState(0);

  const aumenta = function () {
    setContador((estadoantigo) => estadoantigo + 1);
  };

  const diminui = function () {
    setContador((estadoantigo) => estadoantigo - 1);
  };

  const zera = function () {
    setContador(0);
  };

  return (
    <div className="App">
      <h1>React Counter</h1>
      <h2>{contador}</h2>
      <div className="ButtonHolder">
        <button className="btn b-plus" onClick={aumenta}>
          +1
        </button>
        <button className="btn b-minus" onClick={diminui}>
          -1
        </button>
        <button className="btn b-zero" onClick={zera}>
          0
        </button>
      </div>
    </div>
  );
}

export default App;
