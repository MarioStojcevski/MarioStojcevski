type AsciArtProps = {
  art: string;
};

export default function AsciArt({ art }: AsciArtProps) {
  const lines = art.trim().split("\n");

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <pre style={{ whiteSpace: "pre", lineHeight: "1", color: '#BAC4C8' }}>
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
};
