import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
export const LandingPage = () => {
    return (
       
        <div className="top-0">
                <Navbar/>
            <Hero/>
            <AboutSection/>
        </div>
    )
}