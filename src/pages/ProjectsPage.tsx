import { useEffect } from "react";
import ProjectsFilterButtons from "../components/ProjectsFilterButtons";
import ProjectCardsList from "../components/ProjectCardsList";
import SectionHeader from "../components/SectionHeader";

function ProjectsPage() {
  // This use effect resets the scroll of the page to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-20 max-xl:px-8">
      <SectionHeader
        text="My"
        highlight="Projects"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <p className="text-(--nav-links-text) text-xl text-center mb-16">
        A collection of my recent work and personal projects
      </p>

      <ProjectsFilterButtons />

      <ProjectCardsList />
    </div>
  );
}

export default ProjectsPage;
