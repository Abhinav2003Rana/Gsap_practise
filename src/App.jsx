import "./App.css";
import "remixicon/fonts/remixicon.css";
import { useEffect } from "react";
import { Nav } from "./Components/Navigation/Nav";
import { Hero } from "./Components/Hero/Hero";
import { Herotwo } from "./Components/Herotwo/Herotwo";
import { Sectionone } from "./Components/Sectionone/Sectionone";
import { Sectiontwo } from "./Components/Sectiontwo/Sectiontwo";
import { Loco } from "./Components/Locoeffect/Loco";
import { Footer } from "./Components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
  },[]);

  return (
    <>
      <Nav />
      <Hero />
      <Herotwo />
      <Sectionone />
      <Sectiontwo />
      <Loco />
      <Footer />
    </>
  );
}

export default App;
