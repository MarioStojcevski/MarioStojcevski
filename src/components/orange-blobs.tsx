import { useLocation } from "react-router";

interface BlobConfig {
  type: "circle" | "rectangle";
  size: number;
  x: number;
  y: number;
  animationDuration: number;
  animationDelay: number;
}

const getBlobsForPage = (pathname: string): BlobConfig[] => {
  // Different blob configurations for different pages
  if (pathname === "/" || pathname === "") {
    // Home page
    return [
      { type: "circle", size: 120, x: 10, y: 20, animationDuration: 8, animationDelay: 0 },
      { type: "rectangle", size: 100, x: 80, y: 60, animationDuration: 10, animationDelay: 1 },
      { type: "rectangle", size: 90, x: 20, y: 70, animationDuration: 9, animationDelay: 2 },
      { type: "circle", size: 110, x: 70, y: 15, animationDuration: 11, animationDelay: 0.5 },
      { type: "circle", size: 85, x: 5, y: 50, animationDuration: 12, animationDelay: 1.5 },
    ];
  } else if (pathname === "/projects") {
    // Projects page
    return [
      { type: "rectangle", size: 130, x: 15, y: 25, animationDuration: 9, animationDelay: 0 },
      { type: "circle", size: 95, x: 75, y: 55, animationDuration: 10, animationDelay: 1 },
      { type: "rectangle", size: 105, x: 5, y: 75, animationDuration: 8, animationDelay: 2 },
      { type: "rectangle", size: 100, x: 85, y: 10, animationDuration: 11, animationDelay: 0.5 },
      { type: "circle", size: 115, x: 25, y: 45, animationDuration: 9.5, animationDelay: 1.2 },
    ];
  } else if (pathname === "/games") {
    // Games page
    return [
      { type: "rectangle", size: 125, x: 12, y: 30, animationDuration: 8.5, animationDelay: 0 },
      { type: "circle", size: 100, x: 70, y: 20, animationDuration: 10.5, animationDelay: 1 },
      { type: "rectangle", size: 90, x: 8, y: 65, animationDuration: 9.5, animationDelay: 2 },
      { type: "circle", size: 110, x: 82, y: 60, animationDuration: 11, animationDelay: 0.7 },
      { type: "circle", size: 105, x: 30, y: 15, animationDuration: 8, animationDelay: 1.8 },
    ];
  } else if (pathname === "/about-me") {
    // About Me page
    return [
      { type: "circle", size: 115, x: 10, y: 20, animationDuration: 9, animationDelay: 0 },
      { type: "rectangle", size: 100, x: 75, y: 50, animationDuration: 10, animationDelay: 1 },
      { type: "circle", size: 95, x: 20, y: 70, animationDuration: 8.5, animationDelay: 2 },
      { type: "circle", size: 120, x: 80, y: 15, animationDuration: 11, animationDelay: 0.5 },
      { type: "rectangle", size: 85, x: 5, y: 55, animationDuration: 9.5, animationDelay: 1.5 },
    ];
  }
  
  // Default
  return [
    { type: "circle", size: 100, x: 10, y: 20, animationDuration: 8, animationDelay: 0 },
    { type: "rectangle", size: 90, x: 80, y: 60, animationDuration: 10, animationDelay: 1 },
    { type: "rectangle", size: 85, x: 20, y: 70, animationDuration: 9, animationDelay: 2 },
  ];
};

const OrangeBlobs = () => {
  const location = useLocation();
  const blobs = getBlobsForPage(location.pathname);

  const renderBlob = (blob: BlobConfig, index: number) => {
    const baseStyle: React.CSSProperties = {
      position: "absolute",
      left: `${blob.x}%`,
      top: `${blob.y}%`,
      width: `${blob.size}px`,
      height: `${blob.size}px`,
      opacity: 0.4,
      animation: `float-${index} ${blob.animationDuration}s ease-in-out infinite`,
      animationDelay: `${blob.animationDelay}s`,
      pointerEvents: "none",
      zIndex: 0,
    };

    if (blob.type === "circle") {
      return (
        <div
          key={index}
          className="orange-blob-circle"
          style={{
            ...baseStyle,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FF7A05 0%, #FF9500 100%)",
            boxShadow: "0 4px 20px rgba(255, 122, 5, 0.3)",
            filter: "blur(8px)",
          }}
        />
      );
    } else {
      // rectangle
      return (
        <div
          key={index}
          className="orange-blob-rectangle"
          style={{
            ...baseStyle,
            borderRadius: "8px",
            background: "linear-gradient(135deg, #FF9500 0%, #FF7A05 100%)",
            boxShadow: "0 4px 20px rgba(255, 122, 5, 0.3)",
            transform: `rotate(${index * 15}deg)`,
            filter: "blur(8px)",
          }}
        />
      );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {blobs.map((blob, index) => renderBlob(blob, index))}
    </div>
  );
};

export default OrangeBlobs;

