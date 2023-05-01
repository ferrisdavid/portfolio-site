import { useEffect } from "react";

// Particle Class.
import Particle from "./Particle";

// Particle Animation Helpers.
import {
  initCanvas,
  initParticles,
  animateParticles,
  initWaveCanvas,
  initWave,
  animateWave,
} from "./GalaxyAnimation";

// Styles
import styles from "./GalaxyCanvas.module.scss";

/****************************************
 * GalaxyCanvas.tsx - Animated Canvas with Star Particles
 ****************************************/
const GalaxyCanvas = () => {
  useEffect(() => {
    // Particle Animation
    const particles: Particle[] = [];
    const { context, width, height, mouse } = initCanvas();
    initParticles(context!, particles, width, height);
    animateParticles(context!, particles, width, height);

    // Wave Animation
    const { context: wCtx, width: wWidth, height: wHeight } = initWaveCanvas();
    const wave = initWave(wWidth, wHeight);
    animateWave(wCtx, wWidth, wHeight, wave);
  }, []);
  // Render.
  return (
    <>
      <canvas id="galaxy" className={styles.galaxy}></canvas>
      <canvas id="wave" className={styles.wave}></canvas>
    </>
  );
};

export default GalaxyCanvas;
