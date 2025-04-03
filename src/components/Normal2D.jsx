import Sketch from "react-p5";

let slider;

const Normal2D = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth;
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.background(255);
    slider = p5.createSlider(0, 2, 1, 0.01);
    slider.parent(canvasParentRef);
    slider.input(() => {
      p5.background(255);
      p5.redraw();
    });
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    const sliderVal = slider.value();
    const baseStdDev = p5.width / 4;
    const stdDev = baseStdDev * sliderVal;
    let x = p5.randomGaussian(p5.width / 2, stdDev);
    let y = p5.randomGaussian(p5.width / 2, stdDev);

    p5.noStroke();
    p5.fill(0, 10);
    p5.circle(x, y, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Normal2D;
