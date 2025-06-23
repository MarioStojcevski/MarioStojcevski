import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink,
  Code,
  GraduationCap,
  Award,
  Calendar,
  Building
} from 'lucide-react';

function App() {
  const WaveSeparator = ({ className = "", flip = false }: { className?: string, flip?: boolean }) => (
    <div className={`w-full ${className}`}>
      <svg 
        className={`w-full h-16 ${flip ? 'transform scale-y-[-1]' : ''}`} 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  );

  const skills = {
    "Frontend": ["TypeScript/JavaScript", "React.js", "NextJS", "Angular", "Vue", "HTML", "CSS"],
    "UI/UX": ["ChakraUI", "MaterialUI", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Node.js", "Strapi", "Java Spring", ".NET"],
    "Database": ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
    "DevOps": ["Docker", "AWS Lambda", "AWS S3", "CloudFront"],
    "CMS": ["WordPress", "Strapi"]
  };

  const projects = [
    {
      name: "RenderDeck",
      year: "2022",
      description: "A web-based video editing platform built with React, AWS Lambda, and PostgreSQL.",
      tech: ["React", "AWS Lambda", "PostgreSQL"]
    },
    {
      name: "Lista",
      year: "2022 - 2023",
      description: "A web-based image editor for Amazon product listings, integrating Amazon SP API.",
      tech: ["React", "Amazon SP API", "Image Processing"]
    },
    {
      name: "C3RM",
      year: "2023",
      description: "A modular CRM system with a resume builder module, built with NextJS, Strapi, and PostgreSQL.",
      tech: ["NextJS", "Strapi", "PostgreSQL"]
    },
    {
      name: "E-Uslugi",
      year: "2021 - 2022",
      description: "A government system for automating student registration in primary and secondary schools.",
      tech: ["Angular", "Java Spring", "PostgreSQL"],
      link: "e-uslugi.mon.gov.mk"
    },
    {
      name: "KlimaSistemi.mk",
      year: "2020",
      description: "EShop for selling and servicing air conditioners with full e-commerce functionality.",
      tech: ["WordPress", "WooCommerce", "PHP"]
    }
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "codechem.com",
      period: "07/2022 - Present",
      location: "Skopje",
      description: "Developed and maintained web applications using Node.js, React.js, and AWS."
    },
    {
      title: "Software Engineer",
      company: "inteligenta.io",
      period: "12/2021 - 2022",
      location: "Skopje",
      description: "Worked on government information system 'e-uslugi' for automating students' registration."
    },
    {
      title: "Machine Learning Intern",
      company: "loka.com",
      period: "02/2021 - 06/2021",
      location: "San Francisco",
      description: "Worked on machine learning models to predict outcomes of restaurant reviews."
    },
    {
      title: "Full Stack Developer",
      company: "mca.mk",
      period: "08/2020 - 11/2020",
      location: "Skopje",
      description: "Managed construction tenders in the UK using .NET + Angular + MSSQL."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 to-purple-200 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
              MS
            </div>
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Mario Stojcevski</h1>
            <h2 className="text-2xl text-purple-700 mb-6">Software Engineer / Soft Skills Trainer / Public Speaker</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              Hardworking, adaptable, and skilled software engineer with expertise in web development, 
              system architecture, and DevOps. Passionate about solving complex problems and creating 
              impactful solutions. Additionally, a certified Soft Skills Trainer with experience in 
              facilitating sessions on leadership, communication, and mindfulness.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:mariostojcevski@gmail.com" className="flex items-center text-purple-700 hover:text-purple-900 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
              <a href="https://linkedin.com/in/mariostojcevski" className="flex items-center text-purple-700 hover:text-purple-900 transition-colors">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a href="https://github.com/MarioStojcevski" className="flex items-center text-purple-700 hover:text-purple-900 transition-colors">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator className="text-purple-200" />

      {/* Stack Section */}
      <section className="bg-gradient-to-br from-pink-100 to-rose-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Tech Stack</h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-pink-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span key={skill} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator className="text-rose-200" />

      {/* Projects Section */}
      <section className="bg-gradient-to-br from-blue-100 to-cyan-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Projects</h2>
          <div className="max-w-6xl mx-auto space-y-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mr-4">{project.name}</h3>
                    {project.link && (
                      <a href={`https://${project.link}`} className="text-blue-600 hover:text-blue-800">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <span className="text-blue-600 font-medium">{project.year}</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveSeparator className="text-cyan-200" />

      {/* Education Section */}
      <section className="bg-gradient-to-br from-green-100 to-emerald-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <GraduationCap className="w-8 h-8 text-green-600 mr-4 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">B.S. Software Engineering</h3>
                  <h4 className="text-lg text-green-700 font-semibold mb-2">Faculty of Computer Science and Engineering</h4>
                  <div className="flex flex-col md:flex-row md:items-center text-gray-600 mb-4">
                    <div className="flex items-center mr-6 mb-2 md:mb-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      09/2018 - Present
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Skopje, Macedonia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <GraduationCap className="w-8 h-8 text-green-600 mr-4 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">ERASMUS Program - Computer Science</h3>
                  <h4 className="text-lg text-green-700 font-semibold mb-2">Mälardalen University</h4>
                  <div className="flex flex-col md:flex-row md:items-center text-gray-600 mb-4">
                    <div className="flex items-center mr-6 mb-2 md:mb-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      01/2021 - 06/2021
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Västerås/Eskilstuna, Sweden
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator className="text-emerald-200" />

      {/* Certifications & Experience Section */}
      <section className="bg-gradient-to-br from-yellow-100 to-amber-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Certifications & Leadership</h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="flex items-start mb-6">
                <Award className="w-8 h-8 text-amber-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Certified Soft Skills Trainer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Facilitated sessions on leadership, body language, and mindfulness in Skopje and Xanthi, Greece. 
                    Specialized in communication skills development and team leadership training.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start">
                <Building className="w-8 h-8 text-amber-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">EESTEC Leadership</h3>
                  <p className="text-gray-700 mb-4">Active member and former IT Coordinator (2018 - Present)</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Hosted video conference "Program your own OS"</li>
                    <li>• Enhanced WordPress website with React framework</li>
                    <li>• Led technical initiatives and community engagement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparator className="text-amber-200" />

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-orange-100 to-red-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Let's Connect</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <p className="text-lg text-gray-700 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a href="mailto:mariostojcevski@gmail.com" className="text-orange-600 hover:text-orange-800">
                      mariostojcevski@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Skopje, Macedonia</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-6">
                <a 
                  href="https://linkedin.com/in/mariostojcevski" 
                  className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-6 py-3 rounded-full font-medium transition-colors flex items-center"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/MarioStojcevski" 
                  className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-6 py-3 rounded-full font-medium transition-colors flex items-center"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://stackoverflow.com/users/14794082" 
                  className="bg-orange-100 hover:bg-orange-200 text-orange-800 px-6 py-3 rounded-full font-medium transition-colors flex items-center"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Stack Overflow
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Mario Stojcevski. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;