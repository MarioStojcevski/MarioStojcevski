import AsciArt from "./components/asci-art";
import fineArts from "./constants/fine-arts";

const App = () => {
  return (
    <div>
      {fineArts.map((x) => <AsciArt key={x} art={x} />)}                  
    </div>
  )
}

export default App;
