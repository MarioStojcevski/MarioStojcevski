import { Badge } from "../badge";
import { linkStyles, linkDisabledStyles } from "@/lib/styles";

interface EventContentProps {
  goal?: string;
  description?: string;
  topics?: string[];
  learningObjectives?: string[];
  url?: string;
  title: string;
  badgeTheme?: "white" | "purple";
}

export const EventContent = ({
  goal,
  description,
  topics,
  learningObjectives,
  url,
  title,
  badgeTheme = "white",
}: EventContentProps) => {
  const topicBadgeClass = badgeTheme === "purple" ? "bg-purple-100" : "";

  return (
    <>
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
    </>
  );
};
