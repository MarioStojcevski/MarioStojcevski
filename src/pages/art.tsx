import AsciArt from "@/components/asci-art";
import Layout from "@/components/layout";
import fineArts from "@/constants/fine-arts";

const Art = () => {
  return (
    <Layout>
      {fineArts.map((x) => <AsciArt key={x} art={x} />)}
    </Layout>
  );
};

export default Art;