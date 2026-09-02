import { useLocation } from "react-router";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface BlobConfig {
  type: "square" | "circle";
  size: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  animationDuration: number;
}

const getBlobsForPage = (pathname: string): BlobConfig[] => {
  const colors = ["#C8FF00", "#00E5FF", "#FF2D78", "#39FF14", "#B24BF3"];

  if (pathname === "/" || pathname === "") {
    return [
      { type: "square", size: 140, x: 5, y: 15, color: colors[0], rotation: 15, animationDuration: 12 },
      { type: "circle", size: 100, x: 80, y: 20, color: colors[1], rotation: 0, animationDuration: 14 },
      { type: "square", size: 80, x: 15, y: 70, color: colors[2], rotation: -20, animationDuration: 10 },
      { type: "circle", size: 120, x: 70, y: 65, color: colors[4], rotation: 0, animationDuration: 16 },
      { type: "square", size: 60, x: 45, y: 10, color: colors[3], rotation: 45, animationDuration: 11 },
    ];
  }

  return [
    { type: "square", size: 120, x: 8, y: 20, color: colors[0], rotation: -15, animationDuration: 13 },
    { type: "circle", size: 90, x: 85, y: 30, color: colors[1], rotation: 0, animationDuration: 11 },
    { type: "square", size: 100, x: 10, y: 75, color: colors[2], rotation: 30, animationDuration: 15 },
    { type: "circle", size: 70, x: 75, y: 70, color: colors[4], rotation: 0, animationDuration: 12 },
  ];
};

function Blob({
  blob,
  index,
  mouseX,
  mouseY,
  pathname,
}: {
  blob: BlobConfig;
  index: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  pathname: string;
}) {
  const parallaxX = useTransform(mouseX, (v: number) => v * (index % 2 === 0 ? 1 : -1));
  const parallaxY = useTransform(mouseY, (v: number) => v * (index % 2 === 0 ? 0.5 : -0.5));

  return (
    <motion.div
      key={`${pathname}-${index}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      style={{
        position: "absolute",
        left: `${blob.x}%`,
        top: `${blob.y}%`,
        width: `${blob.size}px`,
        height: `${blob.size}px`,
        rotate: blob.rotation,
        x: parallaxX,
        y: parallaxY,
      }}
      className="pointer-events-none"
    >
      <motion.div
        animate={{
          y: [0, -15, 5, -10, 0],
          rotate: [0, 3, -2, 4, 0],
        }}
        transition={{
          duration: blob.animationDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: blob.type === "circle" ? "50%" : "0px",
          backgroundColor: blob.color,
          border: "4px solid #1A1A1A",
        }}
      />
    </motion.div>
  );
}

const NeobrutalistBlobs = () => {
  const location = useLocation();
  const blobs = getBlobsForPage(location.pathname);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 20);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {blobs.map((blob, index) => (
        <Blob
          key={`${location.pathname}-${index}`}
          blob={blob}
          index={index}
          mouseX={mouseX}
          mouseY={mouseY}
          pathname={location.pathname}
        />
      ))}
    </div>
  );
};

export default NeobrutalistBlobs;
