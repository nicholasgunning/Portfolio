import Sketch from "react-p5";

function Bg() {
  let stars = [];
  let sensitivityX = 60;
  let sensitivityY = 60;

  const setup = (p5) => {
    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");

    // Reduce number of stars
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
      stars[i] = new Star(p5);
    }

    // Set frameRate to reduce CPU usage
    p5.frameRate(60);
  };

  const draw = (p5) => {
    p5.background(255, 252, 247);

    // Optimize camera movement by reducing calculation frequency
    const camX = p5.map(p5.mouseX, 0, p5.width, sensitivityX, -sensitivityX);
    const camY = p5.map(p5.mouseY, 0, p5.height, sensitivityY, -sensitivityY);
    p5.camera(camX, camY, p5.height / 2, 0, 0, 0, 0, 1, 0);

    p5.push();
    p5.fill(0);
    p5.noStroke();

    for (let star of stars) {
      star.update();
      star.show();
    }
    p5.pop();
  };

  class Star {
    constructor(p5) {
      this.p5 = p5;
      this.lineDistance = p5.random(1, 1.2);
      this.reset();
    }

    reset() {
      this.x = this.p5.random(-this.p5.width / 2, this.p5.width / 2);
      this.y = this.p5.random(-this.p5.height / 2, this.p5.height / 2);
      this.z = this.p5.random(this.p5.width);
    }

    show() {
      this.sx = this.p5.map(this.x / this.z, 0, 1, 0, this.p5.width / 2);
      this.sy = this.p5.map(this.y / this.z, 0, 1, 0, this.p5.height / 2);
      this.r = this.p5.map(this.z, 0, this.p5.width, 12, 0);

      if (this.r > 0.5) {
        this.p5.strokeWeight(1.5);
        this.p5.stroke(0, this.p5.alpha);
        this.p5.line(
          this.sx,
          this.sy,
          this.sx * this.lineDistance,
          this.sy * this.lineDistance
        );
      }
    }

    update() {
      this.z = this.z - 2;
      if (this.z < 1) {
        this.reset();
      }
    }
  }

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    stars = stars.map(() => new Star(p5));
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
}

export default Bg;
