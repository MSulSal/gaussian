import Sketch from "react-p5";

const Normal2D = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth;
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.background(255);
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    let x = p5.randomGaussian(p5.width / 2, p5.width / (5.3333 * 2));
    let y = p5.randomGaussian(p5.width / 2, p5.width / (5.3333 * 2));

    p5.noStroke();
    p5.fill(0, 10);
    p5.circle(x, y, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Normal2D;
