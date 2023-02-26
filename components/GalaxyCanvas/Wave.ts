import { Point } from "./Point";

export class Wave {
  index: number;
  totalPoints: number;
  color: string;
  points: Point[];

  stageWidth: number = 0;
  stageHeight: number = 0;
  centerX: number = 0;
  centerY: number = 0;
  pointGap: number = 0;

  constructor(
    index: number,
    totalPoints: number,
    color: string,
    width: number,
    height: number
  ) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
    this.stageWidth = width;
    this.stageHeight = height;

    this.centerX = width / 2;
    this.centerY = height / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);
  }

  resize(stageWidth: number, stageHeight: number) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);

    this.init();
  }

  init() {
    this.points = [new Point(0, this.stageHeight - 30, this.index)];

    for (let i = 1; i < this.totalPoints; i++) {
      const point = new Point(
        this.pointGap * i,
        this.stageHeight - i * 18,
        this.index + i
      );
      this.points.push(point);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints - 1) this.points[i].update();

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }

  animateWave(ctx: CanvasRenderingContext2D) {
    requestAnimationFrame(() => this.animateWave(ctx));
    ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.draw(ctx);
  }
}
