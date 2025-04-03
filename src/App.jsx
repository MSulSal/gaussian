import React from "react";
import Normal1D from "./components/Normal1D";
import Normal2D from "./components/Normal2D";

const App = () => {
  return (
    <div className="App">
      <h1>Gaussian Distributions</h1>
      <div className="canvas-container">
        <p>Gaussian Distribution in 1D</p>
        <Normal1D />
      </div>
      <div className="canvas-container">
        <p>Gaussian Distribution in 2D</p>
        <Normal2D />
      </div>
    </div>
  );
};

export default App;
