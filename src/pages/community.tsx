import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { EventCard } from "@/components/ui/event-card";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/scroll-reveal";
import { speakingEvents, workshops } from "@/constants/community";

const Community = () => {
  return (
    <Layout>
      <ScrollReveal>
        <motion.h1
          className="text-5xl lg:text-7xl font-heading mb-4"
          style={{ rotate: -1 }}
          whileHover={{ rotate: 0 }}
        >
          Dev Community
        </motion.h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-12">
          Events I've spoken at and workshops I've held as a developer.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h2 className="text-4xl font-heading mb-6">Speaking Events</h2>
      </ScrollReveal>

      {speakingEvents.length > 0 ? (
        <StaggerChildren className="grid gap-6 md:grid-cols-2 mb-12">
          {speakingEvents.map((event, index) => (
            <StaggerItem key={index}>
              <motion.div
                style={{ rotate: (index % 2 === 0 ? -1 : 1) }}
                whileHover={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <EventCard
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  topics={event.topics}
                  url={event.url}
                  image={event.image}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      ) : (
        <Card className="mb-12">
          <CardContent className="p-6 text-center text-lg text-gray-500">
            No speaking events added yet. Check back soon!
          </CardContent>
        </Card>
      )}

      <ScrollReveal>
        <h2 className="text-4xl font-heading mb-6">Workshops</h2>
      </ScrollReveal>

      {workshops.length > 0 ? (
        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {workshops.map((workshop, index) => (
            <StaggerItem key={index}>
              <motion.div
                style={{ rotate: (index % 2 === 0 ? 1 : -1) }}
                whileHover={{ rotate: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <EventCard
                  title={workshop.title}
                  date={workshop.date}
                  location={workshop.location}
                  description={workshop.description}
                  topics={workshop.topics}
                  url={workshop.url}
                  image={workshop.image}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      ) : (
        <Card>
          <CardContent className="p-6 text-center text-lg text-gray-500">
            No workshops added yet. Check back soon!
          </CardContent>
        </Card>
      )}
    </Layout>
  );
};

export default Community;
