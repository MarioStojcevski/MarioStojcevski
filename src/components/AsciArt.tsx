import { useEffect, useState } from "react";

export default function AsciArt() {

  const art = `
▄███████▄   ▄█     ▄███████▄    ▄████████    ▄████████
██▀     ▄██ ███    ███    ███   ███    ███   ███    ███
      ▄███▀ ███▌   ███    ███   ███    █▀    ███    ███
  ▀█▀▄███▀▄▄ ███▌   ███    ███  ▄███▄▄▄      ▄███▄▄▄▄██▀
    ▄███▀   ▀ ███▌ ▀█████████▀  ▀▀███▀▀▀     ▀▀███▀▀▀▀▀
  ▄███▀       ███    ███          ███    █▄  ▀███████████
  ███▄     ▄█ ███    ███          ███    ███   ███    ███
    ▀████████▀ █▀    ▄████▀        ██████████   ███    ███
`;
  const [colors, setColors] = useState([
    "#ff0055",
    "#ffae00",
    "#ffee00",
    "#00cc55",
    "#00aaff",
    "#cc66ff",
    "#ff66cc",
    "#ffffff",
    "#ff5500",
    "#55ff00",
  ]);

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
        background: "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <pre
        style={{
          fontFamily: "monospace",
          color: "#fff",
          whiteSpace: "pre",
          lineHeight: "1.1",
        }}
      >
        {lines.map((line, i) => (
          <div key={line + i}>
            {line.split("").map((ch, j) => {
              if (ch === " ") return <span key={line + j}>&nbsp;</span>;
              const color = colors[Math.floor(Math.random() * colors.length)];
              return <span key={line + ch + j} style={{ color }}>{ch}</span>
            })}
          </div>
        ))}
      </pre>
    </div>
  );
}
