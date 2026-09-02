import { Link } from "react-router";
import { motion } from "framer-motion";
import Layout from "@/components/layout";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TechnologyBadge } from "@/components/ui/technology-badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/ui/scroll-reveal";
import projects from "@/constants/projects";
import { SOCIAL_URLS } from "@/constants/social";
import { featuredProjectColors, createSlug } from "@/lib/styles";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center mb-20 min-h-[70vh]">
        <div className="flex-1">
          <ScrollReveal>
            <div className="mb-8">
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-9xl font-heading text-chart-5 mb-4 leading-none"
                style={{ rotate: -2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Mario
              </motion.h1>
              <motion.h1
                className="text-6xl sm:text-7xl lg:text-9xl font-heading text-black mb-4 leading-none"
                style={{ rotate: 1 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Stojcevski
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                className="h-2 bg-chart-3 border-4 border-black"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-2xl lg:text-4xl font-heading text-gray-700 mb-8">
              Software Engineer
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-4 text-lg text-gray-700 mb-10 max-w-xl">
              <p>
                Welcome to{" "}
                <span className="inline-block font-bold text-chart-5 border-b-4 border-black">
                  mariostojcevski.com
                </span>
                !
              </p>
              <p>
                I build web applications, design systems, and create digital experiences.
                Explore my projects, passions, and the work I love doing.
              </p>
              <p className="text-base text-gray-500 italic">
                P.S. There might be some games around if I still have them online.
                They're full of bugs, so bring your patience with you!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button className="hover:bg-chart-1 hover:text-black">View Projects</Button>
              </Link>
              <Link to="/about-me">
                <Button variant="outline" className="hover:bg-chart-4 hover:text-black">About Me</Button>
              </Link>
              <a href={SOCIAL_URLS.LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover:bg-chart-2 hover:text-black">LinkedIn</Button>
              </a>
              <a href={SOCIAL_URLS.GITHUB} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="hover:bg-chart-5 hover:text-white">GitHub</Button>
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="right" delay={0.3}>
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <motion.div
              className="border-4 border-black bg-white p-3 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] cursor-pointer"
              style={{ rotate: 3 }}
              whileHover={{ rotate: [3, -5, 8, -3, 5, 0], scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="./me.png"
                alt="Mario Stojcevski"
                className="w-64 h-auto object-contain block mix-blend-multiply"
              />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      {/* Stats Section */}
      <ScrollReveal>
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { value: "20+", label: "Projects", color: "bg-chart-1", rotate: -2 },
            { value: "7+", label: "Years Experience", color: "bg-chart-2", rotate: 1 },
            { value: "60+", label: "Technologies", color: "bg-chart-3", rotate: -1 },
            { value: "∞", label: "Passion", color: "bg-chart-4", rotate: 2 },
          ].map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                style={{ rotate: stat.rotate }}
                whileHover={{ rotate: [0, -5, 8, -3, 5, 0], scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className={`${stat.color} text-center`}>
                  <CardContent className="pt-8 pb-8">
                    <div className="text-5xl lg:text-6xl font-heading mb-2">{stat.value}</div>
                    <div className="text-sm font-bold uppercase tracking-wide">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </ScrollReveal>

      {/* What I Do Section */}
      <ScrollReveal>
        <div className="mb-20">
          <h2 className="text-4xl lg:text-5xl font-heading mb-10">What I Do</h2>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Build", desc: "Web applications, APIs, and systems", color: "bg-chart-2", icon: "01" },
              { title: "Create", desc: "Music production and audio engineering", color: "bg-chart-3", icon: "02" },
              { title: "Share", desc: "Community talks and soft skills training", color: "bg-chart-5", icon: "03" },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ rotate: 0, scale: 1.03 }}
                  style={{ rotate: Math.random() * 4 - 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`${item.color} h-full`}>
                    <CardContent className="pt-8 pb-8">
                      <div className="text-6xl font-heading mb-4 opacity-30">{item.icon}</div>
                      <h3 className="text-3xl font-heading mb-3">{item.title}</h3>
                      <p className="text-lg">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </ScrollReveal>

      {/* Featured Projects */}
      <ScrollReveal>
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl lg:text-5xl font-heading">Featured Projects</h2>
            <Link to="/projects">
              <Button variant="outline" className="hover:bg-chart-4 hover:text-black">View All</Button>
            </Link>
          </div>
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => {
              const colorClass = featuredProjectColors[index % featuredProjectColors.length];
              const projectSlug = createSlug(project.title);
              const rotation = (index - 1) * 2;
              return (
                <StaggerItem key={project.title}>
                  <Link to={`/projects#${projectSlug}`}>
                    <motion.div
                      style={{ rotate: rotation }}
                      whileHover={{ rotate: [0, -8, 12, -5, 8, 0], scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="cursor-pointer"
                    >
                      <Card className={`${colorClass} h-full`}>
                        {project.image && (
                          <div className="w-full h-48 overflow-hidden border-b-4 border-black">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <CardContent className="pt-6 pb-6">
                          <h3 className="text-2xl font-heading mb-3">{project.title}</h3>
                          <p className="text-sm mb-4 line-clamp-2 opacity-80">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <TechnologyBadge key={tech} technology={tech} className="text-xs" />
                            ))}
                            {project.technologies.length > 3 && (
                              <TechnologyBadge technology={`+${project.technologies.length - 3}`} className="text-xs" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </ScrollReveal>

      <Footer />
    </Layout>
  );
};

export default Home;
