import "./App.css";
import Heroarea from "./components/hero/Heroarea.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import About from "./components/about/About.jsx";
import LifePackage from "./components/life-package/LifePackage.jsx";
import SlidingTiles from "./components/sliding-tiles/SlidingTiles.jsx";
import Help from "./components/help/Help.jsx";
import Paperwork from "./components/paperwork/Paperwork.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Heroarea />
      <About />
      <LifePackage />
      <SlidingTiles />
      <Help />
      <Paperwork />
    </>
  );
}

export default App;
