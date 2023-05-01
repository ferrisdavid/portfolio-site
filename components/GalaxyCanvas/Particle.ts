// // Particle Color Palette.
const colors: string[] = ["#D9D9D9", "#C5DAF5", "#4A4A4A"];

// Particle Class.
class Particle {
  context: CanvasRenderingContext2D;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  minSize: number;
  color: string;

  // Particle Constructor.
  constructor(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    dx: number,
    dy: number,
    size: number
  ) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.minSize = size;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  // Draw Particle.
  draw() {
    if (this.context) {
      this.context.beginPath();
      this.context.fillStyle = this.color;
      this.context.ellipse(this.x, this.y, this.size, this.size, 0, 0, 180);
      this.context.fill();
    }
  }

  // Update Particle Position.
  update() {
    this.y += this.dy;
    this.draw();
  }
}

export default Particle;
