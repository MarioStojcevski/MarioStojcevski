import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { EventCard } from "@/components/ui/event-card";
import { speakingEvents, workshops } from "@/constants/community";
import { emptyStateCardStyles, emptyStateContentStyles } from "@/lib/styles";

const Community = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-6xl font-bold mb-4">Dev Community</h1>
          <p className="text-xl text-gray-700">
            Events I've spoken at and workshops I've held as a developer.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Speaking Events</h2>
          {speakingEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {speakingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  topics={event.topics}
                  url={event.url}
                  image={event.image}
                />
              ))}
            </div>
          ) : (
            <Card className={emptyStateCardStyles}>
              <CardContent className={emptyStateContentStyles}>
                No speaking events added yet. Check back soon!
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Workshops</h2>
          {workshops.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {workshops.map((workshop, index) => (
                <EventCard
                  key={index}
                  title={workshop.title}
                  date={workshop.date}
                  location={workshop.location}
                  description={workshop.description}
                  topics={workshop.topics}
                  url={workshop.url}
                  image={workshop.image}
                />
              ))}
            </div>
          ) : (
            <Card className={emptyStateCardStyles}>
              <CardContent className={emptyStateContentStyles}>
                No workshops added yet. Check back soon!
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Community;

