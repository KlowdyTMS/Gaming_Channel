import { Background } from "./components/Background/Background";
import { Particle } from "./components/Particle/Particle";
import { GlobalStyle } from "./components/style/Global-style";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <GlobalStyle />
      <Particle />
      <Background />
      <Home />
    </div>
  );
}

export default App;
