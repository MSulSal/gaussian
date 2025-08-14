import Sketch from "react-p5";

let slider;
let canvasWidth, canvasHeight;

const Normal2DColorLinear = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    canvasWidth = canvasParentRef.offsetWidth;
    canvasHeight = canvasWidth;
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.background(0);
    const label = p5.createDiv("Standard Deviation:");
    label.style("font-size", "16px");
    label.style("margin-top", "10px");
    label.parent(canvasParentRef);
    slider = p5.createSlider(0, 2, 1, 0.01);
    slider.parent(canvasParentRef);
    slider.input(() => {
      p5.background(0);
      p5.redraw();
    });
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    const sliderVal = slider.value();
    const baseStdDev = p5.width / 4;
    const stdDev = baseStdDev * sliderVal;
    let x = p5.randomGaussian(p5.width / 2, stdDev);
    let y = p5.random(p5.height);
    p5.noStroke();
    p5.fill(
      (x / p5.width) * 255,
      0,
      255 - (x / p5.width) * 255,
      100 - (p5.abs(x - p5.width / 2) / (p5.width / 2)) * 100
    );
    p5.circle(x, y, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Normal2DColorLinear;
