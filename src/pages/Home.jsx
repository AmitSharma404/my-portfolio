import { Navbar } from "../Components/Navbar"
import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBackground }from "@/Components/StarBackground"
import { HeroSection } from "../Components/HeroSection"
import { AboutSection } from "../Components/AboutSection"
import { SkillSection } from "../Components/SkillSection"
import { ProjectSection } from "../Components/ProjectSection"
import { ContactSection } from "../Components/ContactSection"
export const Home = () => {
    return(
        <div className="min-h-screen container bg-background text-foreground overflow-x-hidden">
            <ThemeToggle/>
            {/* Theme toggle  */}

            {/* Background effect */}
            <StarBackground/>
            {/* Navbar  */}
            <Navbar/>

            {/* Main content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <ProjectSection/>
                <ContactSection/>
            </main>

            {/*  Footer */}
        </div>
    )
}

