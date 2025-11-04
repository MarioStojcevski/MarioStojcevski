import clsx from "clsx";

type AsciArtProps = {
  art: string;
  colorIndex: number;
};

export default function AsciArt({ art, colorIndex }: AsciArtProps) {
  const lines = art.trim().split("\n");

  return (
    <div
      style={{
        height: "40vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <pre className={clsx(`text-chart-${colorIndex}`, "whitespace-pre-wrap leading-none")}>
        {lines.map((line, i) => (
          <div key={line + i}>
            {line.split("").map((ch, j) => {
              if (ch === " ") return <span key={line + ch + j}>&nbsp;</span>;
              return <span key={line + ch + j}>{ch}</span>
            })}
          </div>
        ))}
      </pre>
    </div>
  );
};
