import Layout from "@/components/layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex min-h-screen align-middle mt-5">
        <div className="flex-4">
          <div>
            <h1 className="text-3xl font-bold text-chart-5 mt-10">
              Mario Stojcevski
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 mt-2">
              Software Engineer
            </h2>
            <p className="text-lg text-gray-600 mt-10">
              Welcome to my landing page. Here you can find more info about me, my projects, and passions.
            </p>
            <p className="text-lg text-gray-600">
              There's also probably some games around if I still have them online, you can have a look. They're full of bugs so bring your patience with you.
            </p>
          </div>
        </div>

        <div className="lg:flex-3">
          <img src="./me.png" alt="Profile Image" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
