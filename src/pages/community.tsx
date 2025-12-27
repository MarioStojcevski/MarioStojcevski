import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { speakingEvents, workshops } from "@/constants/community";

const Community = () => {
  const getLocationUrl = (location: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold mb-4">Community</h1>
          <p className="text-lg text-gray-700">
            Events I've spoken at and workshops I've held as a developer.
          </p>
        </div>

        {/* Speaking Events */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Speaking Events</h2>
          {speakingEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {speakingEvents.map((event, index) => (
                <Card key={index} className="bg-white border-2 border-black cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0">
                  {event.image && (
                    <div className="w-full h-48 overflow-hidden border-b-2 border-black rounded-t-base">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="flex flex-wrap gap-2">
                      {event.date && (
                        <Badge variant="outline" className="bg-white">{event.date}</Badge>
                      )}
                      {event.location && (
                        <a
                          href={getLocationUrl(event.location)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer"
                        >
                          <Badge variant="outline" className="bg-chart-1 text-black hover:opacity-80 transition-opacity">
                            {event.location}
                          </Badge>
                        </a>
                      )}
                    </div>
                    {event.description && (
                      <p className="mt-4 text-gray-700">{event.description}</p>
                    )}
                    {event.topics && event.topics.length > 0 && (
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Topics Covered:</p>
                        <div className="flex flex-wrap gap-2">
                          {event.topics.map((topic, i) => (
                            <Badge key={i} variant="outline">{topic}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {event.url ? (
                      <a
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-blue-600 hover:underline cursor-pointer"
                      >
                        Learn more →
                      </a>
                    ) : (
                      <span className="mt-4 inline-block text-gray-400 cursor-default">
                        Learn more →
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-2 border-black bg-gray-50">
              <CardContent className="p-6 text-center text-gray-500">
                No speaking events added yet. Check back soon!
              </CardContent>
            </Card>
          )}
        </div>

        {/* Workshops */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Workshops</h2>
          {workshops.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {workshops.map((workshop, index) => (
                <Card key={index} className="bg-white border-2 border-black cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 active:translate-x-0 active:translate-y-0">
                  {workshop.image && (
                    <div className="w-full h-48 overflow-hidden border-b-2 border-black rounded-t-base">
                      <img
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <h3 className="text-2xl font-bold">{workshop.title}</h3>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <div className="flex flex-wrap gap-2">
                      {workshop.date && (
                        <Badge variant="outline" className="bg-white">{workshop.date}</Badge>
                      )}
                      {workshop.location && (
                        <a
                          href={getLocationUrl(workshop.location)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-pointer"
                        >
                          <Badge variant="outline" className="bg-chart-1 text-black hover:opacity-80 transition-opacity">
                            {workshop.location}
                          </Badge>
                        </a>
                      )}
                    </div>
                    {workshop.description && (
                      <p className="mt-4 text-gray-700">{workshop.description}</p>
                    )}
                    {workshop.topics && workshop.topics.length > 0 && (
                      <div className="mt-4">
                        <p className="font-semibold mb-2">Topics Covered:</p>
                        <div className="flex flex-wrap gap-2">
                          {workshop.topics.map((topic, i) => (
                            <Badge key={i} variant="outline">{topic}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    {workshop.url ? (
                      <a
                        href={workshop.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-blue-600 hover:underline cursor-pointer"
                      >
                        Learn more →
                      </a>
                    ) : (
                      <span className="mt-4 inline-block text-gray-400 cursor-default">
                        Learn more →
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border-2 border-black bg-gray-50">
              <CardContent className="p-6 text-center text-gray-500">
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

