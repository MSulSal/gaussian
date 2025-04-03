import Sketch from "react-p5";

let slider;

const Normal1D = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    p5.background(255);
    slider = p5.createSlider(0, 2, 0.5, 0.01);
    slider.parent(canvasParentRef);
    slider.input(() => {
      p5.background(255);
      p5.redraw();
    });
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    const sliderValue = slider.value();
    const baseStdDev = p5.width / 4;
    const stdDev = baseStdDev * sliderValue;
    let x = p5.randomGaussian(p5.width / 2, stdDev);

    p5.noStroke();
    p5.fill(0, 10);
    p5.circle(x, p5.height / 2, 16);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Normal1D;
