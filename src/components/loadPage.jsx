import React from "react";
import Sketch from "react-p5";

function LoadPage() {
  const intro = ["Portfolio", "of", "NICK", "GUNNING", "."];
  let currentIndex = 0;
  let lastChangeTime = 0;
  let x, y, size;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.fill(50);
    updatePosition(p5); // Set the initial random position
  };

  const draw = (p5) => {
    p5.background(255, 249, 240);

    // Check if 400 milliseconds have passed
    if (p5.millis() - lastChangeTime > 400) {
      currentIndex += 1; // Increment the index
      if (currentIndex >= intro.length) {
        currentIndex = 0; // Reset to the first phrase if we reach the end
      }
      updatePosition(p5); // Update to a new random position
      lastChangeTime = p5.millis(); // Reset the timer
    }

    p5.textSize(size);
    p5.text(intro[currentIndex], x, y); // Draw the current phrase
  };

  const updatePosition = (p5) => {
    // Generate a new random position on the canvas
    x = p5.random(50, p5.width - 50);
    y = p5.random(50, p5.height - 50);
    size = p5.random(48, 100);
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default LoadPage;
