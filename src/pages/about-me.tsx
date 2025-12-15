import Layout from "@/components/layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  return (
    <Layout>
      <div className="max-w-4xl">
        <h1 className="text-5xl lg:text-6xl font-bold text-chart-5 mb-8">
          About Me
        </h1>

        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Mario Stojcevski, a Software Engineer passionate about building robust and scalable 
              applications. I've been working at CodeChem since August 2022, where I contribute to 
              exciting projects that challenge me and help me grow as a developer.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              I hold a Bachelor's degree in Computer Software Engineering from the Faculty of Computer 
              Science and Engineering in Skopje, and I had the opportunity to participate in the 
              ERASMUS+ program at Mälardalen University in Sweden in 2021, which broadened my 
              perspective on software engineering and international collaboration.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              My professional journey has taken me through various roles and technologies. Before joining 
              CodeChem, I worked at Inteligenta from December 2021 to August 2022, focusing on projects 
              like e-uslugi. Prior to that, I was a Machine Learning Developer at Loka, Inc. in early 2021, 
              where I specialized in natural language processing to classify restaurant reviews.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I also worked as a Full Stack Developer at MCA.mk in late 2020, contributing to the UK-based 
              BidWork project, which enhanced communication within the construction industry.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in full-stack development, working with modern technologies like React, 
              Next.js, Node.js, and various cloud services. I enjoy architecting systems, solving 
              complex problems, and turning ideas into reality through code. Beyond development, I'm 
              also involved in research, particularly in the field of Deep Learning, where I've published 
              papers addressing solutions for aiding the mobility of individuals with disabilities.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">My Passions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-chart-1 border-2 border-black">
                <CardHeader>
                  <h3 className="text-xl font-bold">🏔️ Hiking</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    I love exploring nature trails and mountains. There's something peaceful 
                    about being in nature that helps me recharge and find inspiration.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-chart-2 border-2 border-black">
                <CardHeader>
                  <h3 className="text-xl font-bold">🧗 Rock Climbing</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Rock climbing challenges me both physically and mentally. It teaches 
                    problem-solving, patience, and pushing beyond limits.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-chart-4 border-2 border-black">
                <CardHeader>
                  <h3 className="text-xl font-bold">🚴 Cycling</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Whether it's road cycling or mountain biking, I enjoy the freedom and 
                    adventure that comes with exploring on two wheels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Beyond Code</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When I'm not coding, you'll find me outdoors pursuing my passions. These activities 
              keep me balanced and bring fresh perspectives to my work. They remind me that 
              problem-solving isn't just about code—it's about approaching challenges with 
              creativity and determination.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I also enjoy exploring various art forms, engaging in social activities, and creative 
              endeavors like music production and programming projects that combine my technical 
              skills with artistic expression.
            </p>
          </div>

          <div className="border-2 border-black rounded-base bg-main p-6">
            <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-700 mb-4">
              Interested in collaborating or just want to chat? Feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="https://www.linkedin.com/in/mariostojcevski" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Badge className="text-base px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition-all">
                  LinkedIn
                </Badge>
              </a>
              <a href="mailto:mariostojcevski@gmail.com">
                <Badge className="text-base px-4 py-2 cursor-pointer hover:bg-black hover:text-white transition-all">
                  Email
                </Badge>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutMe;