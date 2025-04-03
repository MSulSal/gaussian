import Sketch from "react-p5";

let canvasWidth, canvasHeight;

const Normal2DColorRadial = () => {
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
    let y = p5.randomGaussian(p5.width / 2, p5.width / (5.3333 * 2));
    let r = p5.sqrt(p5.sq(x - p5.width / 2) + p5.sq(y - p5.height / 2));
    let maxR = p5.sqrt(p5.sq(p5.width / 2) + p5.sq(p5.height / 2));
    p5.noStroke();
    p5.fill(
      255 - (r / maxR) * 255,
      0,
      (r / maxR) * 255,
      100 - (r / maxR) * 100
    );
    p5.circle(x, y, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Normal2DColorRadial;
