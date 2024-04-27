import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { TargetAudience } from "../components/TargetAudience";
export const LandingPage = () => {
    return (
        <>
        <div>
            <Hero/>
            <AboutSection />
            <TargetAudience/>
        </div>
        </>
    )
}