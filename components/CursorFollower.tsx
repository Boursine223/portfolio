import React, { useEffect, useRef, useState } from 'react';

const isTouchDevice = () => typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const CursorFollower: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [idle, setIdle] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastMoveRef = useRef<number>(Date.now());

  useEffect(() => {
    // Activer le rendu uniquement côté client pour éviter le mismatch SSR/CSR
    setMounted(true);
    if (isTouchDevice()) return; // Ne pas activer sur mobile/tablette

    const onMouseMove = (e: MouseEvent) => {
      lastMoveRef.current = Date.now();
      setIdle(false);
      // utiliser requestAnimationFrame pour limiter les updates
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    const isInteractive = (el: Element | null) => {
      if (!el) return false;
      const interactiveSelectors = 'a, button, [role="button"], input, textarea, select, [data-cursor-interactive="true"]';
      return !!(el.closest(interactiveSelectors));
    };

    const onPointerOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      setHoveringInteractive(isInteractive(target));
    };

    const onPointerOut = (e: MouseEvent) => {
      const target = e.relatedTarget as Element | null;
      setHoveringInteractive(isInteractive(target));
    };

    const idleChecker = setInterval(() => {
      if (Date.now() - lastMoveRef.current > 2000) {
        setIdle(true);
      }
    }, 500);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onPointerOver as any);
    window.addEventListener('mouseout', onPointerOut as any);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onPointerOver as any);
      window.removeEventListener('mouseout', onPointerOut as any);
      clearInterval(idleChecker);
    };
  }, []);

  // Ne rien rendre côté serveur pour éviter les erreurs d'hydratation
  if (!mounted || isTouchDevice()) return null;

  const dotStyle: React.CSSProperties = {
    transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
  };

  const ringStyle: React.CSSProperties = {
    // centrer l'anneau selon sa taille (variable si hover)
    transform: hoveringInteractive
      ? `translate3d(${pos.x - 21}px, ${pos.y - 21}px, 0)`
      : `translate3d(${pos.x - 15}px, ${pos.y - 15}px, 0)`,
    opacity: idle ? 0.35 : 0.95,
  };

  return (
    <>
      <div className={`cursor-ring${hoveringInteractive ? ' cursor-ring--hover' : ''}`} style={ringStyle} />
      <div className="cursor-dot" style={dotStyle} />
    </>
  );
};

export default CursorFollower;
