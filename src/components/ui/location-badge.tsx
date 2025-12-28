import { Badge } from "./badge";
import { getLocationUrl, isOnlineLocation } from "@/lib/location-utils";

interface LocationBadgeProps {
  location: string;
  theme?: "default" | "purple";
}

export const LocationBadge = ({ location, theme = "default" }: LocationBadgeProps) => {
  if (isOnlineLocation(location)) {
    return (
      <Badge variant="outline" className="bg-gray-400 text-gray-600 cursor-default">
        {location}
      </Badge>
    );
  }

  const badgeClass = theme === "purple" 
    ? "bg-purple-200 text-black hover:opacity-80 transition-opacity"
    : "bg-chart-1 text-black hover:opacity-80 transition-opacity";

  return (
    <a
      href={getLocationUrl(location)}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <Badge variant="outline" className={badgeClass}>
        {location}
      </Badge>
    </a>
  );
};

