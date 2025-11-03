import Layout from "@/components/layout";
import Marquee from "@/components/ui/marquee";

const Art = () => {
  return (
    <Layout>
      <div className="flex flex-col-2">
        <Marquee />
        <Marquee />
        <Marquee />
        <Marquee />
        <Marquee />
      </div>
    </Layout>
  );
};

export default Art;