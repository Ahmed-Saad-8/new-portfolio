import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div>
      <h1 className="playpen-sans-arabic-header">hello world</h1>
    </div>
  );
};

export default App;
