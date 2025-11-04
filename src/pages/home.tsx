import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row text-2xl">
        <div className="flex-8">
          <h1 className="text-6xl font-bold text-chart-5 text-shadow-xs">
            Mario Stojcevski
          </h1>
          <h2 className="text-3xl font-semibold text-gray-700 mt-2">
            Software Engineer at <a href="https://codechem.com"><img className="inline-block" width={28} src="./cc.svg" /></a>
          </h2>
          <p className="text-gray-600 mt-8">
            Welcome to <span className="text-chart-2"><a href="#">mariostojcevski.com</a></span>! 🎉
          </p>
          <p className="text-lg text-gray-600 mt-1">
            Explore my projects, passions, and work I love doing. 🚀
          </p>
          <p className="text-lg text-gray-600 mt-8">
            Let’s connect and create something amazing! 😎
          </p>
          <p className="text-lg text-gray-600">
            There's also probably some games around if I still have them online, you can have a look. They're full of bugs so bring your patience with you.
          </p>

          <div className="mt-4 space-x-4 space-y-2 sm:space-y-0">
            <Button className="w-full sm:w-fit">Read my blog</Button>
            <Button className="w-full sm:w-fit">Get in touch</Button>
          </div>
        </div>

        <div className="flex-3 mx-auto lg:mt-0 mt-10">
          <img src="./me.png" alt="Profile Image" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
