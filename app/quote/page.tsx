import Navbar from "../components/Navbar";
import ContactCards from "./Contactcards";
import EnquiryForm from "./Enquiryform";
import Hero from "./Hero";
import Whylimeswood from "./Whylimeswood";




export default function QuotePage () {
    return (
        <>
        <Hero/>
        <Navbar/>
        <ContactCards/>
        <EnquiryForm/>
        <Whylimeswood/>
        </>
    )
}