import { Badge } from "../badge";
import { LocationBadge } from "../location-badge";

interface EventBadgesProps {
  date?: string;
  duration?: string;
  location?: string;
  badgeTheme?: "white" | "purple";
}

export const EventBadges = ({ date, duration, location, badgeTheme = "white" }: EventBadgesProps) => {
  const badgeBgClass = badgeTheme === "purple" ? "bg-purple-100" : "bg-white";
  const locationTheme = badgeTheme === "purple" ? "purple" : "default";

  if (!date && !duration && !location) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {date && (
        <Badge variant="outline" className={badgeBgClass}>
          {date}
        </Badge>
      )}
      {duration && (
        <Badge variant="outline" className={badgeBgClass}>
          {duration}
        </Badge>
      )}
      {location && <LocationBadge location={location} theme={locationTheme} />}
    </div>
  );
};
