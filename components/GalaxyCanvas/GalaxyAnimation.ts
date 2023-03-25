// Particle Class
import Particle from "./Particle";

// Wave Class
import { Wave } from "./Wave";

export const initCanvas = () => {
  // // Retrieve Canvas Element and Associated Context.
  const canvas = document.querySelector("#galaxy") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  const scale = window.devicePixelRatio === 1 ? 2 : window.devicePixelRatio; // Scales the pixels to prevent blurry particles.
  canvas.width = canvas.width * scale;
  canvas.height = canvas.height * scale;

  // // Canvas Limits.
  const width = canvas.width;
  const height = canvas.height;

  // // Mouse Tracking Variable.
  const mouse: { x: number | undefined; y: number | undefined } = {
    x: undefined,
    y: undefined,
  };
  const maxSide = 70;

  // // Mouse Move Event Listener.
  canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  return { context, width, height, mouse };
};

const createParticle = (
  context: CanvasRenderingContext2D,
  width: number,
  height: number,
  initY?: number
) => {
  const size = Math.random() * 4;
  const x = Math.random() * (width - size * 2) + size;
  const y =
    initY !== undefined ? initY : Math.random() * (height - size * 2) + size;
  const dx = Math.random() - 0.5;
  const dy = -(Math.abs(Math.random() - 0.5) / 3);

  return new Particle(context, x, y, dx, dy, size);
};

export const initParticles = (
  context: CanvasRenderingContext2D,
  particles: Particle[],
  width: number,
  height: number
) => {
  const numParticles = 50;
  for (let i = 0; i < numParticles; i++) {
    const particle = createParticle(context, width, height);
    particles.push(particle);
  }
};

export const animateParticles = (
  context: CanvasRenderingContext2D | null,
  particles: Particle[],
  width: number,
  height: number
) => {
  if (context) {
    requestAnimationFrame(() =>
      animateParticles(context, particles, width, height)
    );
    context.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      if (particles[i].y > height || particles[i].y < 0) {
        const particle = createParticle(context, width, height, height);
        particles[i] = particle;
      } else {
        particles[i].update();
      }
    }
  }
};

export const initWaveCanvas = () => {
  // // Retrieve Canvas Element and Associated Context.
  const canvas = document.querySelector("#wave") as HTMLCanvasElement;
  const context = canvas.getContext("2d");

  // // Canvas Limits.
  const width = canvas.width;
  const height = canvas.height;

  return { context, width, height };
};

export const initWave = (width: number, height: number) => {
  const wave = new Wave(0, 10, "#4a4a4a", width, height);
  wave.init();
  return wave;
};

export const animateWave = (
  context: CanvasRenderingContext2D | null,
  width: number,
  height: number,
  wave: Wave
) => {
  if (context) {
    requestAnimationFrame(() => animateWave(context, width, height, wave));
    context.clearRect(0, 0, width, height);
    wave.draw(context);
  }
};
