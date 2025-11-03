import Layout from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import projects from "@/constants/projects";
import { useState } from "react";

const Projects = () => {
  const [projectsWithColor] = useState(projects.map(project => ({...project, bgColor: `${(Math.floor(Math.random() * 5))}`})));

  return (
    <Layout>
      <div className="grid gap-0 sm:grid-cols-2 rounded-md">
        {projectsWithColor.map(project => (
          <Card 
            key={project.title} 
            className={`bg-chart-${project.bgColor} cursor-pointer odd:border-r odd:border-b-0 even:border-b-0 
            first:rounded-tl-lg nth-[2]:rounded-tr-lg nth-last-[2]:rounded-bl-lg last:rounded-br-lg`}>
            <CardHeader>
                {project.title}
            </CardHeader>
            <hr className="mx-6" />
            <CardContent>
              <div className="w-full h-50 overflow-hidden border-2 rounded-md mb-2">
                <img
                  src={project.image}
                  alt="Project Image"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {project.description}
            </CardContent>
            <CardFooter className="overflow-x-auto flex flex-wrap">
              {project.technologies.map(tech => <Badge key={project+tech} className="mx-0.5 my-0.5">{tech}</Badge>)}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;