import AchievementSection from "./components/AcheiveSection";
import EducationSection from "./components/EduSection";
import ExperienceSection from "./components/ExpSection";
import GitHubContributions from "./components/Github";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import TechStack from "./components/techStack";

export default function Home() {
  return (
    <div>
      <Hero />                   
      <EducationSection />       
      <ExperienceSection />    
      <AchievementSection />     
      <ProjectsSection />       
      <GitHubContributions />    
      <TechStack />             
    </div>
  );
}

