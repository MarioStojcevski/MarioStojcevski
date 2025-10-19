import { useState } from "react";

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
    return Array.from({ length: colors.length }, () =>
      `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")}`
    );
  };

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
          <div key={i}>
            {line.split("").map((ch, j) => {
              if (ch === " ") return <span key={j}>&nbsp;</span>;
              const color = colors[Math.floor(Math.random() * colors.length)];
              return (
                <>
                <span key={j} style={{ color }}>
                  {ch}
                </span>

                </>
              );
            })}
          </div>
        ))}
      </pre>
      <button
        onClick={() => setColors(generateColors())}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}>
          Click me
      </button>
    </div>
  );
}
