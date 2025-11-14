import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStack } from "@/components/sections/TechStack";
import { Divider } from "@/components/ui/divider";

export default function Home() {
  return <>
  <HeroSection />
  <Divider />
  <TechStack />
  <Divider />
  <ExperienceSection />
  <Divider />
  <ProjectsSection />
  </>
}
