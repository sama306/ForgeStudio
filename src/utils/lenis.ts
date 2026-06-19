import Lenis from 'lenis';

let lenis: Lenis | null = null;

export function initLenis(): void {
  if (lenis) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !prefersReduced,
    smoothTouch: false,
    touchMultiplier: 2,
  });

  function raf(time: number): void {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
