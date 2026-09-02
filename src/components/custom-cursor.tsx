import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const TRAIL_COUNT = 8;

const TRAIL_COLORS = [
  "rgba(178, 75, 243, 1)",
  "rgba(255, 45, 120, 0.9)",
  "rgba(200, 255, 0, 0.8)",
  "rgba(0, 229, 255, 0.7)",
  "rgba(57, 255, 20, 0.6)",
  "rgba(178, 75, 243, 0.5)",
  "rgba(255, 45, 120, 0.4)",
  "rgba(200, 255, 0, 0.35)",
];

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [rightClickMsg, setRightClickMsg] = useState<{ x: number; y: number; id: number } | null>(null);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const trailPositions = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 })));
  const rafId = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onMouseDown = () => setPressing(true);
    const onMouseUp = () => setPressing(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setRightClickMsg({ x: e.clientX, y: e.clientY, id: Date.now() });
      setTimeout(() => setRightClickMsg(null), 1800);
    };
    document.addEventListener("contextmenu", onContextMenu);

    const interactives = document.querySelectorAll("a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]");
    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const animateTrail = () => {
      const { x: mx, y: my } = mousePos.current;
      trailRefs.current.forEach((dot, i) => {
        const prev = i === 0 ? { x: mx, y: my } : trailPositions.current[i - 1];
        const speed = 0.28 - i * 0.02;
        trailPositions.current[i].x += (prev.x - trailPositions.current[i].x) * speed;
        trailPositions.current[i].y += (prev.y - trailPositions.current[i].y) * speed;
        if (dot) {
          dot.style.transform = `translate(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px)`;
        }
      });
      rafId.current = requestAnimationFrame(animateTrail);
    };
    rafId.current = requestAnimationFrame(animateTrail);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("contextmenu", onContextMenu);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      cancelAnimationFrame(rafId.current);
    };
  }, [cursorX, cursorY, visible]);

  return (
    <>
      {/* Energy trail particles */}
      {trailRefs.current.map((_, i) => {
        const size = 12 - i * 1;
        return (
          <div
            key={i}
            ref={(el) => { trailRefs.current[i] = el; }}
            className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
            style={{ willChange: "transform" }}
          >
            <div
              style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: "50%",
                background: TRAIL_COLORS[i],
                boxShadow: `0 0 ${size * 3}px ${size}px ${TRAIL_COLORS[i]}`,
                marginLeft: `-${size / 2}px`,
                marginTop: `-${size / 2}px`,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            />
          </div>
        );
      })}

      {/* Main cursor - blade of the damned */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-3px",
          translateY: "-2px",
          filter: "drop-shadow(0 0 8px rgba(178, 75, 243, 0.6)) drop-shadow(0 0 16px rgba(255, 45, 120, 0.3))",
        }}
      >
        <motion.svg
          width="36"
          height="44"
          viewBox="0 0 28 36"
          animate={{
            scale: hovering ? 1.3 : pressing ? 0.8 : 1,
            rotate: hovering ? -15 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <defs>
            <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B24BF3" />
              <stop offset="40%" stopColor="#FF2D78" />
              <stop offset="100%" stopColor="#C8FF00" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Dark crystal blade */}
          <path
            d="M14 0 L18 10 L26 14 L18 18 L14 36 L10 18 L2 14 L10 10 Z"
            fill="url(#bladeGrad)"
            stroke="#1A1A1A"
            strokeWidth="1.5"
            filter="url(#glow)"
          />
          {/* Inner rune mark */}
          <path
            d="M14 8 L16 14 L14 20 L12 14 Z"
            fill="#FAFAFA"
            opacity="0.8"
          />
          {/* Eye of the damned */}
          <circle cx="14" cy="14" r="2.5" fill="#C8FF00" />
          <circle cx="14" cy="14" r="1.2" fill="#1A1A1A" />
        </motion.svg>
      </motion.div>

      {/* Orbiting rune ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-22px",
          translateY: "-22px",
        }}
      >
        <motion.div
          animate={{
            rotate: hovering ? 360 : 0,
            scale: hovering ? 1.4 : pressing ? 0.6 : 1,
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { type: "spring", stiffness: 300, damping: 20 },
          }}
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: `3px dashed rgba(178, 75, 243, ${hovering ? 0.9 : 0.5})`,
            boxShadow: `0 0 12px rgba(178, 75, 243, ${hovering ? 0.5 : 0.2})`,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s, border-color 0.3s",
          }}
        />
      </motion.div>

      {/* Right-click message */}
      {rightClickMsg && (
        <motion.div
          key={rightClickMsg.id}
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10 }}
          className="pointer-events-none fixed z-[9999] hidden md:block"
          style={{ left: rightClickMsg.x + 16, top: rightClickMsg.y - 8 }}
        >
          <div className="bg-black text-white border-2 border-chart-5 px-3 py-1.5 text-sm font-bold whitespace-nowrap shadow-[3px_3px_0px_0px_rgba(178,75,243,1)]">
            {["Nope, not here!", "Nice try tho ;)", "Haha, nope!", "Right click go brrr... wait", "404: Right click not found"][rightClickMsg.id % 5]}
          </div>
        </motion.div>
      )}
    </>
  );
}
