import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Intro from "../components/Intro";
import Wellness from "../components/Wellness";
import Nature from "../components/Nature";
import Place from "../components/Place";
import Design from "../components/Design";
import Residences from "../components/Residences";
import Interiors from "../components/Interiors";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Gallery />
      <Intro />
      <Wellness />
      <Nature />
      <Place />
      <Design />
      <Residences />
      <Interiors />
    </div>
  );
}