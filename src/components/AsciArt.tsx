import { useEffect } from "react";

type AsciArtProps = {
  colors: string[];
  color: string;
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
  art: string;
};

export default function AsciArt({ colors, color, setColors, art }: AsciArtProps) {
  const lines = art.trim().split("\n");

  const generateColors = () => {
    setColors(Array.from({ length: colors.length }, () =>
      `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")}`
    ));
  };

  useEffect(() => {
    const intervalId = setInterval(generateColors, 500);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div
      style={{
        background: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <pre
        style={{
          color: "black",
          fontFamily: "monospace",
          whiteSpace: "pre",
          lineHeight: "1.1",
        }}
      >
        {lines.map((line, i) => (
          <div key={line + i}>
            {line.split("").map((ch, j) => {
              if (ch === " ") return <span key={line + j}>&nbsp;</span>;
              return <span key={line + ch + j}>{ch}</span>
            })}
          </div>
        ))}
      </pre>
    </div>
  );
}
