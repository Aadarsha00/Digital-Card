import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
// ─── Dot Grid Pattern Background ─────────────────────────────────────────────

export function DotGridBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dot-grid"
          x="0"
          y="0"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="#0A0A0A" opacity="0.12" />
        </pattern>
        <mask id="fade-mask">
          <radialGradient id="mask-gradient" cx="60%" cy="40%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <rect width="100%" height="100%" fill="url(#mask-gradient)" />
        </mask>
      </defs>

      {/* Orbit dot on outer ring */}
      <motion.circle
        cx="152"
        cy="80"
        r="4"
        fill="#0A0A0A"
        opacity={0.5}
        animate={{ rotate: 360 }}
        style={{ originX: "80px", originY: "80px", transformBox: "fill-box" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      {/* Orbit dot on middle ring */}
      <motion.circle
        cx="80"
        cy="30"
        r="3"
        fill="#0A0A0A"
        opacity={0.4}
        animate={{ rotate: -360 }}
        style={{ originX: "80px", originY: "80px", transformBox: "fill-box" }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      {/* Center diamond */}
      <motion.rect
        x="74"
        y="74"
        width="12"
        height="12"
        fill="#0A0A0A"
        opacity={0.25}
        animate={{ rotate: 45 }}
        style={{ originX: "80px", originY: "80px", transformBox: "fill-box" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

// ─── Scattered Doodle Elements ─────────────────────────────────────────────────

export function ScatteredShapes() {
  return (
    <>
      {/* Top-left corner cross */}
      <motion.svg
        className="absolute top-8 left-8 pointer-events-none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.3, rotate: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <line
          x1="12"
          y1="0"
          x2="12"
          y2="24"
          stroke="#0A0A0A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="12"
          x2="24"
          y2="12"
          stroke="#0A0A0A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Bottom-left small triangle */}
      <motion.svg
        className="absolute bottom-12 left-12 pointer-events-none"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <polygon
          points="9,2 17,16 1,16"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </motion.svg>

      {/* Wavy underline doodle near CTA */}
      <motion.svg
        className="absolute bottom-[30%] left-[4%] pointer-events-none hidden lg:block"
        width="60"
        height="16"
        viewBox="0 0 60 16"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.25, scaleX: 1 }}
        style={{ transformOrigin: "left center" }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <path
          d="M2 8 Q8 2, 14 8 Q20 14, 26 8 Q32 2, 38 8 Q44 14, 50 8 Q56 2, 58 8"
          stroke="#0A0A0A"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Right-side small circle cluster */}
      <motion.svg
        className="absolute top-[15%] right-[2%] pointer-events-none"
        width="40"
        height="80"
        viewBox="0 0 40 80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.circle
            key={i}
            cx={i % 2 === 0 ? 10 : 28}
            cy={8 + i * 16}
            r={i === 2 ? 5 : 3}
            fill="#0A0A0A"
            opacity={0.12 + i * 0.04}
            animate={{ y: [0, -3, 0] }}
            transition={{
              duration: 2.5 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.svg>
    </>
  );
}

// ─── Arrow Doodle ─────────────────────────────────────────────────────────────

export function ArrowDoodle() {
  return (
    <motion.svg
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="absolute bottom-[22%] left-[36%] pointer-events-none hidden lg:block"
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
    >
      <motion.path
        d="M10 10 C 20 50, 60 20, 75 70"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      />
      <motion.path
        d="M65 75 L75 70 L68 62"
        stroke="#0A0A0A"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.2 }}
      />
    </motion.svg>
  );
}

// ─── Interactive Spark Cursor (follows mouse inside hero) ──────────────────────

export function CursorSpark({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [active, setActive] = useState(false);

  const springX = useSpring(x, { stiffness: 220, damping: 22 });
  const springY = useSpring(y, { stiffness: 220, damping: 22 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
      setActive(true);
    };
    const onLeave = () => setActive(false);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [containerRef, x, y]);

  return (
    <motion.div
      className="absolute pointer-events-none z-50"
      style={{
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.4 }}
      transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="6" fill="#C9FF47" opacity="0.6" />
        <circle
          cx="16"
          cy="16"
          r="10"
          stroke="#0A0A0A"
          strokeWidth="0.8"
          opacity="0.2"
        />
        {/* Radial spokes */}
        {[0, 45, 90, 135].map((deg) => (
          <line
            key={deg}
            x1="16"
            y1="16"
            x2={16 + 14 * Math.cos((deg * Math.PI) / 180)}
            y2={16 + 14 * Math.sin((deg * Math.PI) / 180)}
            stroke="#0A0A0A"
            strokeWidth="0.6"
            opacity="0.25"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </motion.div>
  );
}

export function NetworkDoodle() {
  const nodes = [
    { x: 30, y: 20 },
    { x: 80, y: 55 },
    { x: 50, y: 80 },
    { x: 110, y: 30 },
    { x: 90, y: 90 },
    { x: 15, y: 60 },
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
    [0, 5],
    [3, 1],
  ];

  return (
    <motion.svg
      className="absolute bottom-8 right-[2%] pointer-events-none hidden lg:block"
      width="130"
      height="110"
      viewBox="0 0 130 110"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#0A0A0A"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i === 1 ? 5 : 3}
          fill={i === 1 ? "#C9FF47" : "#0A0A0A"}
          stroke="#0A0A0A"
          strokeWidth="0.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          transition={{ delay: 0.9 + i * 0.08, type: "spring", stiffness: 300 }}
        />
      ))}
    </motion.svg>
  );
}

export function OrbitRings() {
  return (
    <motion.div
      className="absolute right-[5%] top-[8%] pointer-events-none hidden lg:block"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
        {/* Outer ring */}
        <motion.circle
          cx="80"
          cy="80"
          r="72"
          stroke="#0A0A0A"
          strokeWidth="0.6"
          strokeDasharray="4 6"
          opacity={0.2}
          animate={{ rotate: 360 }}
          style={{ originX: "80px", originY: "80px" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        {/* Middle ring */}
        <motion.circle
          cx="80"
          cy="80"
          r="50"
          stroke="#0A0A0A"
          strokeWidth="0.6"
          strokeDasharray="3 8"
          opacity={0.18}
          animate={{ rotate: -360 }}
          style={{ originX: "80px", originY: "80px" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner ring */}
        <motion.circle
          cx="80"
          cy="80"
          r="28"
          stroke="#0A0A0A"
          strokeWidth="0.8"
          opacity={0.12}
          animate={{ rotate: 360 }}
          style={{ originX: "80px", originY: "80px" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        {/* Orbit dot on outer ring */}
        <motion.circle
          cx="152"
          cy="80"
          r="4"
          fill="#0A0A0A"
          opacity={0.5}
          animate={{ rotate: 360 }}
          style={{ originX: "80px", originY: "80px", transformBox: "fill-box" }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        {/* Orbit dot on middle ring */}
        <motion.circle
          cx="80"
          cy="30"
          r="3"
          fill="#0A0A0A"
          opacity={0.4}
          animate={{ rotate: -360 }}
          style={{ originX: "80px", originY: "80px", transformBox: "fill-box" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        {/* Center diamond */}
        <motion.rect
          x="74"
          y="74"
          width="12"
          height="12"
          fill="#0A0A0A"
          opacity={0.25}
          animate={{ rotate: 45 }}
          style={{ originX: "80px", originY: "80px", transformBox: "fill-box" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </motion.div>
  );
}
