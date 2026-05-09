'use client';

import { useEffect, useRef } from 'react';
import { getStroke } from 'perfect-freehand';

type Point = [number, number, number]; // x, y, timestamp

const TRAIL_LIFETIME = 550;
const MAX_POINTS = 80;

const STROKE_OPTIONS = {
  size: 6,
  thinning: 0.55,
  smoothing: 0.85,
  streamline: 0.6,
  easing: (t: number) => Math.sin((t * Math.PI) / 2),
  start: { taper: 30, easing: (t: number) => t },
  end: { taper: 60, easing: (t: number) => t },
};

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<Point[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const handleMove = (e: MouseEvent) => {
      const now = performance.now();
      pointsRef.current.push([e.clientX, e.clientY, now]);
      if (pointsRef.current.length > MAX_POINTS) {
        pointsRef.current.splice(0, pointsRef.current.length - MAX_POINTS);
      }
    };

    const tick = () => {
      const now = performance.now();
      const pts = pointsRef.current;

      let cutoff = 0;
      for (let i = 0; i < pts.length; i++) {
        if (now - pts[i][2] < TRAIL_LIFETIME) {
          cutoff = i;
          break;
        }
        cutoff = i + 1;
      }
      if (cutoff > 0) pts.splice(0, cutoff);

      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      if (pts.length >= 2) {
        const inputPoints = pts.map(([x, y, t]) => {
          const age = (now - t) / TRAIL_LIFETIME;
          const pressure = Math.max(0.05, 1 - age);
          return [x, y, pressure] as [number, number, number];
        });

        const outline = getStroke(inputPoints, STROKE_OPTIONS);
        if (outline.length >= 3) {
          const path = new Path2D();
          path.moveTo(outline[0][0], outline[0][1]);
          for (let i = 1; i < outline.length; i++) {
            const [x, y] = outline[i];
            path.lineTo(x, y);
          }
          path.closePath();

          const head = pts[pts.length - 1];
          const tail = pts[0];
          const grad = ctx.createLinearGradient(tail[0], tail[1], head[0], head[1]);
          grad.addColorStop(0, 'rgba(180, 200, 255, 0)');
          grad.addColorStop(0.4, 'rgba(180, 200, 255, 0.45)');
          grad.addColorStop(1, 'rgba(255, 255, 255, 0.95)');

          ctx.shadowColor = 'rgba(180, 200, 255, 0.8)';
          ctx.shadowBlur = 14;
          ctx.fillStyle = grad;
          ctx.fill(path);
          ctx.shadowBlur = 0;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('resize', resize);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9998,
      }}
      aria-hidden
    />
  );
}
