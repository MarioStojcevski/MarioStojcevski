import { Card, CardContent, CardHeader } from "./card";
import { Badge } from "./badge";
import { LocationBadge } from "./location-badge";
import { cardHoverStyles, cardBaseStyles, linkStyles, linkDisabledStyles } from "@/lib/styles";

interface EventCardProps {
  title: string;
  date?: string;
  duration?: string;
  location?: string;
  description?: string;
  topics?: string[];
  url?: string;
  image?: string;
  coTrainer?: string;
  coTrainerUrl?: string;
  goal?: string;
  learningObjectives?: string[];
  badgeTheme?: "white" | "purple";
}

export const EventCard = ({
  title,
  date,
  duration,
  location,
  description,
  topics,
  url,
  image,
  coTrainer,
  coTrainerUrl,
  goal,
  learningObjectives,
  badgeTheme = "white",
}: EventCardProps) => {
  const badgeBgClass = badgeTheme === "purple" ? "bg-purple-100" : "bg-white";
  const topicBadgeClass = badgeTheme === "purple" ? "bg-purple-100" : "";
  const locationTheme = badgeTheme === "purple" ? "purple" : "default";
  return (
    <Card className={`${cardBaseStyles} ${cardHoverStyles}`}>
      {image && (
        <div className="w-full h-48 overflow-hidden border-b-2 border-black rounded-t-base">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <CardHeader>
        <h3 className="text-2xl font-bold">{title}</h3>
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
        {coTrainer && (
          <p className="mt-2 text-sm text-gray-600">
            Co-trainer:{" "}
            {coTrainerUrl ? (
              <a
                href={coTrainerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                {coTrainer}
              </a>
            ) : (
              <span className="font-semibold">{coTrainer}</span>
            )}
          </p>
        )}
      </CardHeader>
      <CardContent className="pb-6">
        {goal && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Goal of Session:</p>
            <p className="text-gray-700">{goal}</p>
          </div>
        )}
        {description && <p className="mt-4 text-gray-700">{description}</p>}
        {topics && topics.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Topics Covered:</p>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic, index) => (
                <Badge key={`${title}-topic-${index}`} variant="outline" className={topicBadgeClass}>
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        )}
        {learningObjectives && learningObjectives.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold mb-2">Learning Objectives:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {learningObjectives.map((objective, index) => (
                <li key={`${title}-objective-${index}`}>{objective}</li>
              ))}
            </ul>
          </div>
        )}
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className={linkStyles}>
            Learn more →
          </a>
        ) : (
          <span className={linkDisabledStyles}>Learn more →</span>
        )}
      </CardContent>
    </Card>
  );
};

