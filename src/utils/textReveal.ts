import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let synced = false;

function ensureLenisSync(): void {
  if (synced) return;
  synced = true;
  import('./lenis').then(({ getLenis }) => {
    const lenis = getLenis();
    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
    }
  });
}

export function revealHeadings(
  selector: string,
  options?: { stagger?: number; yOffset?: number },
): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const { stagger = 0.04, yOffset = 20 } = options ?? {};

  gsap.registerPlugin(ScrollTrigger);
  ensureLenisSync();
  gsap.ticker.lagSmoothing(0);

  const headings = document.querySelectorAll<HTMLElement>(selector);
  if (!headings.length) return;

  headings.forEach((heading) => {
    const text = heading.textContent?.trim();
    if (!text) return;

    const words = text.split(/\s+/);
    heading.innerHTML = words
      .map((word) => `<span class="reveal-word" style="display: inline-block">${word}</span>`)
      .join(' ');
  });

  headings.forEach((heading) => {
    const words = heading.querySelectorAll<HTMLElement>('.reveal-word');
    if (!words.length) return;

    const section = heading.closest('section');

    gsap.fromTo(
      words,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section || heading,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      },
    );
  });
}
