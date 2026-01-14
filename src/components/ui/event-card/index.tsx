import { Card, CardContent, CardHeader } from "../card";
import { cardHoverStyles, cardBaseStyles } from "@/lib/styles";
import { EventImage } from "./event-image";
import { EventBadges } from "./event-badges";
import { CoTrainerInfo } from "./co-trainer-info";
import { EventContent } from "./event-content";

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
  return (
    <Card className={`${cardBaseStyles} ${cardHoverStyles}`}>
      {image && <EventImage image={image} title={title} />}
      <CardHeader>
        <h3 className="text-2xl font-bold">{title}</h3>
        <EventBadges date={date} duration={duration} location={location} badgeTheme={badgeTheme} />
        {coTrainer && <CoTrainerInfo coTrainer={coTrainer} coTrainerUrl={coTrainerUrl} />}
      </CardHeader>
      <CardContent className="pb-6">
        <EventContent
          goal={goal}
          description={description}
          topics={topics}
          learningObjectives={learningObjectives}
          url={url}
          title={title}
          badgeTheme={badgeTheme}
        />
      </CardContent>
    </Card>
  );
};
