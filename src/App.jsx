import React from "react";
import Normal1D from "./components/Normal1D";
import Normal2D from "./components/Normal2D";
import Buckets from "./components/Buckets";
import BucketsColor from "./components/BucketsColor";
import Normal2DColorRadial from "./components/Normal2DColorRadial";

const App = () => {
  return (
    <div className="App">
      <h1>Gaussian Distributions</h1>
      <div className="canvas-container">
        <p>Gaussian Distribution Buckets</p>
        <Buckets />
      </div>
      <div className="canvas-container">
        <p>Gaussian Distribution Buckets with Color Gradient</p>
        <BucketsColor />
      </div>
      <div className="canvas-container">
        <p>Gaussian Distribution in 1D</p>
        <Normal1D />
      </div>
      <div className="canvas-container">
        <p>Gaussian Distribution in 2D</p>
        <Normal2D />
      </div>
      <div className="canvas-container">
        <p>Gaussian Distribution in 2D, Radial Gradient</p>
        <Normal2DColorRadial />
      </div>
    </div>
  );
};

export default App;
