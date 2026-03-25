import Navbar from "../components/Navbar";
import Whoweare from "./Whoweare";
import Hero from "./Hero";
import Visionmission from "../home/Visionmission";
import Corevalues from "../home/Corevalues";
import Whychooseus from "./Whychooseus";
import Aboutserviceinfo from "./Aboutserviceinfo";
import Meetourexecutives from "./Meetourexecutives";




export default function About() {
    return (
        <>
        <section>
            <Hero/>
            <Navbar/>
            <div className='overflow'>
            <Whoweare/>
            <Visionmission/>
            <Corevalues/>
            <Meetourexecutives/>
            <Whychooseus/>
            <Aboutserviceinfo/>
            </div>
        </section>
        </>
    )
}