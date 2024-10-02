import Sketch from "react-p5"

function Bg() {
    
    var canvas;
    var stars = [];
    var sensitivityX = 30; 
    var sensitivityY = 30;
    const setup = (p5) => {
        canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');
 
        for (let i = 0; i < 600; i++) {
            let x = p5.random(-p5.width,p5.width);
            let y = p5.random(-p5.height,p5.height);
            let r = p5.random(1,10);
            let z = p5.width;
            stars[i] = new Star(p5);    
        }
    }

    const draw = (p5) => {
        p5.background(239, 228, 216);  

   
        const camX = p5.map(p5.mouseX, 0, p5.width, sensitivityX, -sensitivityX);
        const camY = p5.map(p5.mouseY, 0, p5.height, sensitivityY, -sensitivityY);
        p5.camera(camX, camY, (p5.height/2), 0, 0, 0, 0, 1, 0);


        for (let i = 0; i < stars.length; i++) {
            stars[i].update();
            stars[i].show();
        }
    };

    function Star(p5) {
        this.p5 = p5;
        this.x = p5.random(-p5.width, p5.width);
        this.y = p5.random(-p5.height, p5.height);
        this.z = p5.random(p5.width);
        this.lineDistance = p5.random(1, 10)
 
        this.show = function () { 
            this.p5.fill(0, 0, 0)         
            this.sx = p5.map(this.x / this.z, 0, 1, 0, p5.width);
            this.sy = p5.map(this.y / this.z, 0, 1, 0, p5.height);
            this.r = p5.map(this.z, 0, p5.width, 18, 0);
            this.p5.ellipse(this.sx, this.sy, this.r, this.r);
        }


        this.update = function () {
            this.z = this.z - 1;
            if (this.z < 1) {
                this.z = p5.width;
                this.x = p5.random(-p5.width,p5.width);
                this.y = p5.random(-p5.height,p5.height);
            }
        }
    }
    return <Sketch setup={setup} draw={draw} />
}
export default Bg;