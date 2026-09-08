'use client';

import { useEffect, useRef } from 'react';

const interactiveSelector = 'a,button,[role="button"],summary,input,textarea,select';

export function CustomCursor() {
  const ringRef = useRef<HTMLSpanElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    const root = document.documentElement;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    root.classList.add('custom-cursor-ready');
    let frame = 0;
    let currentX = -100;
    let currentY = -100;
    let targetX = -100;
    let targetY = -100;

    const render = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      ring.style.transform = `translate3d(${currentX - 20}px, ${currentY - 20}px, 0)`;
      dot.style.transform = `translate3d(${targetX - 3}px, ${targetY - 3}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) frame = requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const onOver = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest(interactiveSelector)) root.classList.add('cursor-hover');
    };
    const onOut = (event: PointerEvent) => {
      const next = event.relatedTarget instanceof Element ? event.relatedTarget.closest(interactiveSelector) : null;
      if (!next) root.classList.remove('cursor-hover');
    };
    const onDown = () => root.classList.add('cursor-down');
    const onUp = () => root.classList.remove('cursor-down');

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('pointerout', onOut, { passive: true });
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointercancel', onUp, { passive: true });
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerout', onOut);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointercancel', onUp);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove('custom-cursor-ready', 'cursor-hover', 'cursor-down');
    };
  }, []);

  return <><span ref={ringRef} className="cursor-ring" aria-hidden="true" /><span ref={dotRef} className="cursor-dot" aria-hidden="true" /></>;
}

