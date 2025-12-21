import { Link } from "react-router";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import projects from "@/constants/projects";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);
  const totalProjects = projects.length;

  return (
    <Layout>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center mb-16">
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-6xl lg:text-7xl font-bold text-chart-5 mb-2">
              Mario Stojcevski
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-2 flex-wrap">
              <span>Software Engineer at</span>
              <a 
                href="https://codechem.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <img className="inline-block align-middle" width={32} height={32} src="./cc.svg" alt="CodeChem" />
                <span className="align-middle">CodeChem</span>
              </a>
            </h2>
          </div>

          <div className="space-y-4 text-lg text-gray-700 mb-8">
            <p>
              Welcome to <span className="text-chart-2 font-bold">mariostojcevski.com</span>! 🎉
            </p>
            <p>
              I build web applications, design systems, and create digital experiences. 
              Explore my projects, passions, and the work I love doing. 🚀
            </p>
            <p>
              Let's connect and create something amazing together! 😎
            </p>
            <p className="text-base text-gray-600 italic">
              P.S. There might be some games around if I still have them online. 
              They're full of bugs, so bring your patience with you! 🎮
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/projects">
              <Button>View Projects</Button>
            </Link>
            <Link to="/about-me">
              <Button variant="outline">About Me</Button>
            </Link>
            <a 
              href="https://www.linkedin.com/in/mariostojcevski" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline">Find me on LinkedIn</Button>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <div className="border-2 border-black rounded-base p-3 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <img 
              src="./me.png" 
              alt="Mario Stojcevski" 
              className="rounded-base w-64 h-auto object-contain block"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <Card className="bg-chart-1 border-2 border-black text-center">
          <CardContent className="pt-6 pb-6">
            <div className="text-4xl font-bold mb-2">{totalProjects}+</div>
            <div className="text-sm font-semibold">Projects</div>
          </CardContent>
        </Card>
        <Card className="bg-chart-2 border-2 border-black text-center">
          <CardContent className="pt-6 pb-6">
            <div className="text-4xl font-bold mb-2">5+</div>
            <div className="text-sm font-semibold">Years Experience</div>
          </CardContent>
        </Card>
        <Card className="bg-chart-3 border-2 border-black text-center">
          <CardContent className="pt-6 pb-6">
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-sm font-semibold">Technologies</div>
          </CardContent>
        </Card>
        <Card className="bg-chart-4 border-2 border-black text-center">
          <CardContent className="pt-6 pb-6">
            <div className="text-4xl font-bold mb-2">∞</div>
            <div className="text-sm font-semibold">Passion</div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Projects */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <Link to="/projects">
            <Button variant="outline">View All →</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link key={project.title} to="/projects">
              <Card className="bg-chart-2 border-2 border-black cursor-pointer transition-all hover:translate-x-1 hover:translate-y-1 h-full">
                <CardContent className="p-0">
                  {project.image && (
                    <div className="w-full h-40 overflow-hidden border-b-2 border-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="border-2 border-black rounded-base bg-main p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link to="/projects">
            <Badge className="text-base px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition-all">
              All Projects
            </Badge>
          </Link>
          <Link to="/games">
            <Badge className="text-base px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition-all">
              Games
            </Badge>
          </Link>
          <Link to="/about-me">
            <Badge className="text-base px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition-all">
              About Me
            </Badge>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
