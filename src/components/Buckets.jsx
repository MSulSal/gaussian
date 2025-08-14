import Sketch from "react-p5";

let slider;

const Buckets = () => {
  let randomCounts = [];
  let total = 50;
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    for (let i = 0; i < total; i++) {
      randomCounts[i] = 0;
    }
    const label = p5.createDiv("Standard Deviation:");
    label.style("font-size", "16px");
    label.style("margin-top", "10px");
    label.parent(canvasParentRef);
    slider = p5.createSlider(0, 2, 1, 0.01);
    slider.parent(canvasParentRef);
    slider.input(() => {
      p5.background(0);
      for (let i = 0; i < total; i++) {
        randomCounts[i] = 0;
      }
      p5.redraw();
    });
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    const sliderVal = slider.value();
    const baseStdDev = total / 4;
    const stdDev = baseStdDev * sliderVal;
    let index;
    do {
      index = p5.floor(p5.randomGaussian(randomCounts.length / 2, stdDev));
    } while (index < 0 || index >= randomCounts.length);
    randomCounts[index]++;
    p5.stroke(0);
    p5.fill(0, 255, 0);
    let w = p5.width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
      p5.rect(x * w, p5.height - randomCounts[x], w - 1, randomCounts[x]);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Buckets;
