import Sketch from "react-p5";

let canvasWidth, canvasHeight;

const Normal2DColorLinear = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    canvasWidth = canvasParentRef.offsetWidth;
    canvasHeight = canvasWidth;
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.background(255);
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    let x = p5.randomGaussian(p5.width / 2, p5.width / (5.3333 * 2));
    let y = p5.random(p5.height);
    p5.noStroke();
    p5.fill(
      (x / p5.width) * 255,
      0,
      255 - (x / p5.width) * 255,
      (x / p5.width) * 100
    );
    p5.circle(x, y, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Normal2DColorLinear;
