import AsciArt from "@/components/asci-art";
import Layout from "@/components/layout";
import fineArts from "@/constants/fine-arts";
import { useEffect, useState } from "react";

const Art = () => {
  const [colorIndex, setColorIndex] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setColorIndex(Math.floor(Math.random() * 5) + 1);
    }, (1000));
  }, []);

  return (
    <Layout>
      {fineArts.map(a => 
      <div key={a} style={{ fontSize: '10px'}}>
        <AsciArt art={a} colorIndex={colorIndex} />
      </div>)
      }
    </Layout>
  );
};

export default Art;