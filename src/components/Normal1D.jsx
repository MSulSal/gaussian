import Sketch from "react-p5";

const Normal1D = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.background(255);
  };

  // When the window is resized, recalculate the width and height.
  //   const windowResized = (p5) => {
  //     const canvasParent = p5.canvas.parentNode;
  //     const newWidth = canvasParent.offsetWidth;
  //     const newHeight = newWidth * 0.5;
  //     p5.resizeCanvas(newWidth, newHeight);
  //   };

  // Draw function to render the sketch
  const draw = (p5) => {
    let x = p5.randomGaussian(p5.width / 2, p5.width / (5.3333 * 2));

    p5.noStroke();
    p5.fill(0, 10);
    p5.circle(x, p5.height / 2, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Normal1D;
