import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface TechnologyBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  technology: string;
}

// Exclude chart-1 (yellow) from hover colors
const paletteColors = ['bg-chart-2', 'bg-chart-3', 'bg-chart-4', 'bg-chart-5'] as const;

// Generate a consistent random color based on the technology string
const getColorForTechnology = (tech: string): string => {
  // Use the technology string to generate a consistent hash
  let hash = 0;
  for (let i = 0; i < tech.length; i++) {
    hash = tech.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Use absolute value to ensure positive index
  const index = Math.abs(hash) % paletteColors.length;
  return paletteColors[index];
};

export const TechnologyBadge = ({ technology, className, ...props }: TechnologyBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverColor = useMemo(() => getColorForTechnology(technology), [technology]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation(); // Prevent card click when clicking badge
    props.onClick?.(e);
  };

  return (
    <span
      {...props}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "inline-flex items-center justify-center border-2 border-black px-2.5 py-0.5 text-xs font-bold whitespace-nowrap rounded-base cursor-pointer transition-all",
        "bg-main text-main-foreground",
        isHovered && `${hoverColor} text-black scale-110`,
        className
      )}
    >
      {technology}
    </span>
  );
};
