import AsciArt from "./components/asci-art";
import { Button } from "./components/ui/button";
import fineArts from "./constants/fine-arts";

const App = () => {
  return (
    <div>
      <Button>test</Button>
      {fineArts.map((x) => <AsciArt key={x} art={x} />)}                  
    </div>
  )
}

export default App;
