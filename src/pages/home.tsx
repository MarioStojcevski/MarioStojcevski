import { Link } from "react-router";
import Layout from "@/components/layout";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { SocialButton } from "@/components/ui/social-button";
import projects from "@/constants/projects";
import { SOCIAL_URLS } from "@/constants/social";
import { featuredProjectColors, borderBlack, createSlug } from "@/lib/styles";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const totalProjects = projects.length;

  return (
    <Layout>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center mb-16">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-7xl lg:text-8xl font-bold text-chart-5 mb-2">
              Mario Stojcevski
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">
              Software Engineer
            </h2>
          </div>

          <div className="space-y-4 text-xl text-gray-700 mb-8">
            <p>
              Welcome to <span className="inline-block align-middle min-w-[180px] text-center"><Link to="/" className="text-chart-5 font-bold hover:text-chart-5/80 inline-block cursor-pointer transition-colors hover:animate-[spin-pop_0.6s_ease-in-out_1] transform-origin-center">mariostojcevski.com</Link></span>! 🎉
            </p>
            <p>
              I build web applications, design systems, and create digital experiences. 
              Explore my projects, passions, and the work I love doing. 🚀
            </p>
            <p>
              Let's connect and create something amazing together! 😎
            </p>
            <p className="text-lg text-gray-600 italic">
              P.S. There might be some games around if I still have them online. 
              They're full of bugs, so bring your patience with you! 🎮
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/projects" className="cursor-pointer">
              <Button className="hover:bg-yellow-600 hover:text-white">View Projects</Button>
            </Link>
            <Link to="/about-me" className="cursor-pointer">
              <Button variant="outline" className="bg-green-600 text-white border-black hover:bg-green-700">About Me</Button>
            </Link>
            <SocialButton platform="linkedin" href={SOCIAL_URLS.LINKEDIN}>
              Find me on LinkedIn
            </SocialButton>
            <SocialButton platform="github" href={SOCIAL_URLS.GITHUB}>
              GitHub
            </SocialButton>
          </div>
        </div>

        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <div className="rounded-base p-3 bg-transparent">
            <img 
              src="./me.png" 
              alt="Mario Stojcevski" 
              className="rounded-base w-64 h-auto object-contain block mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <StatsCard value={`${totalProjects}+`} label="Projects" bgColor="bg-chart-1" animationDelay="0s" />
        <StatsCard value="5+" label="Years Experience" bgColor="bg-chart-2" animationDelay="0.5s" />
        <StatsCard value="10+" label="Technologies" bgColor="bg-chart-3" animationDelay="1s" />
        <StatsCard value="∞" label="Passion" bgColor="bg-chart-4" animationDelay="1.5s" />
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-5xl font-bold">Featured Projects</h2>
          <Link to="/projects" className="cursor-pointer">
            <Button variant="outline" className="bg-green-600 text-white border-green-600 hover:bg-green-700 hover:border-green-700">View All →</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => {
            const colorClass = featuredProjectColors[index % featuredProjectColors.length];
            const projectSlug = createSlug(project.title);
            return (
            <Link key={project.title} to={`/projects#${projectSlug}`} className="cursor-pointer">
              <Card className={`${colorClass} ${borderBlack} cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 h-full`}>
                <CardContent className="p-0">
                  {project.image && (
                    <div className={`w-full h-40 overflow-hidden ${borderBlack} rounded-t-base border-b-2`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-t-base"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-base text-gray-700 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} className="text-xs bg-chart-1 text-black">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge className="text-xs bg-chart-1 text-black">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Home;
