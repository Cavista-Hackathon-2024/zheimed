import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { TargetAudience } from "../components/TargetAudience";
import {Footer} from "../components/footer";
import {TryDemo} from "../components/tryDemo"
export const LandingPage = () => {
    return (
        <>
            <section>
                <Hero/>
                <AboutSection />
                <TargetAudience/>
                <TryDemo />
            </section>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

