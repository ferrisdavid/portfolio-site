export class Point {
  x: number;
  y: number;
  fixedY: number;
  fixedX: number;
  speed: number;
  cur: number;
  max: number;

  constructor(x: number, y: number, index: number) {
    this.x = x;
    this.y = y;
    this.fixedY = y;
    this.fixedX = x;
    this.speed = 0.01;
    this.cur = index;
    this.max = Math.random() * 100 + 150;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * 12;
  }
}
