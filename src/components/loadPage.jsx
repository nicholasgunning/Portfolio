import React, { useRef } from "react";
import Sketch from "react-p5";

function LoadPage() {
  const canvasRef = useRef(null);
  const intro = ["Portfolio", "of", "NICK", "GUNNING", "."];
  let currentIndex = 0;
  let lastChangeTime = 0;
  let x, y, size;

  const setup = (p5, canvasParentRef) => {
    // Use the ref to ensure a valid parent element
    const parentElement = canvasRef.current;
    if (parentElement) {
      p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(parentElement);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.fill(50);
      updatePosition(p5);
    } else {
      p5.noCanvas();
    }
  };

  const draw = (p5) => {
    p5.background(255, 249, 240);

    if (p5.millis() - lastChangeTime > 400) {
      currentIndex += 1;
      if (currentIndex >= intro.length) {
        currentIndex = 0;
      }
      updatePosition(p5);
      lastChangeTime = p5.millis();
    }

    p5.textSize(size);
    p5.text(intro[currentIndex], x, y);
  };

  const updatePosition = (p5) => {
    x = p5.random(50, p5.width - 50);
    y = p5.random(50, p5.height - 50);
    size = p5.random(48, 100);
  };

  return (
    <div ref={canvasRef}>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
}

export default LoadPage;
