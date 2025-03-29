import { Interactive3DHero } from "@/components/ui/interactive-3d-hero";
import { AboutSection } from "@/components/sections/about";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative">
      <Interactive3DHero
        title="Parin Patel"
        subtitle="Data Engineer | Software Engineer"
        description='"Exploring data, engineering insights, and driving impact"'
        splineUrl=""
      />
      
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}
