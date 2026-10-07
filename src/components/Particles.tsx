import { useEffect, useRef } from "react";

// Lightweight twinkling star field, modeled on the reference site's tsparticles setup.
export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = window.devicePixelRatio || 1;
    type Star = { x: number; y: number; r: number; a: number; da: number };
    let stars: Star[] = [];
    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      const count = Math.round((window.innerWidth * window.innerHeight) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: (Math.random() * 0.8 + 0.4) * dpr,
        a: Math.random(),
        da: (Math.random() * 0.01 + 0.002) * (Math.random() < 0.5 ? -1 : 1),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        if (!reduceMotion) {
          s.a += s.da;
          if (s.a <= 0.05 || s.a >= 1) s.da *= -1;
          s.x += 0.05 * dpr;
          if (s.x > canvas.width) s.x = 0;
        }
        ctx.globalAlpha = Math.max(0.05, Math.min(1, s.a));
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}
