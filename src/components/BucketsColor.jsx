import Sketch from "react-p5";

const BucketsColor = () => {
  let randomCounts = [];
  let total = 200;
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    for (let i = 0; i < total; i++) {
      randomCounts[i] = 0;
    }
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    let index = p5.floor(
      p5.randomGaussian(
        randomCounts.length / 2,
        randomCounts.length / (5.3333 * 2)
      )
    );
    randomCounts[index]++;
    p5.stroke(0);

    let w = p5.width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
      p5.fill(
        p5.floor((x / total) * 255),
        0,
        255 - p5.floor((x / total) * 255)
      );
      p5.rect(x * w, p5.height - randomCounts[x], w - 1, randomCounts[x]);
    }
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default BucketsColor;
