import Clients from "./home/Clients";
import Corevalues from "./home/Corevalues";
import Hero from "./home/Hero";
import Newsandinsight from "./home/Newsandinsight";
import ParallaxSection from "./home/ParallaxSection";
import Partners from "./home/Partners";
import Quickbio from "./home/Quickbio";
import Serviceinfo from "./home/Serviceinfo";
import Visionmission from "./home/Visionmission";

export default function Home() {
  return (
    <div className="overflow">
      <Hero/>
      <Quickbio/>
      <Partners/>
      <Visionmission/>
      <Corevalues/>
      <Serviceinfo/>
      <Clients/>
      <ParallaxSection image="/parallaximg.jpg" title="Limeswood International Company Limited" description="Delivering the highest value of service delivery to customers, with Respect, Friendliness, and Company Spirit."/>
      <Newsandinsight/>      
    </div>
  );
}
