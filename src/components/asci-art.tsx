type AsciArtProps = {
  art: string;
};

export default function AsciArt({ art }: AsciArtProps) {
  const lines = art.trim().split("\n");

  return (
    <div className=""
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
    >
      <pre className="whitespace-pre-wrap leading-none">
        {lines.map((line, i) => (
          <div key={line + i}>
            {line.split("").map((ch, j) => {
              if (ch === " ") return <span key={line + j}>&nbsp;</span>;
              return <span className="text-chart-1" key={line + ch + j}>{ch}</span>
            })}
          </div>
        ))}
      </pre>
    </div>
  );
};
