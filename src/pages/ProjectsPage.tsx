import ProjectActionButtons from "../components/ProjectActionButtons";
import ProjectCardsList from "../components/ProjectCardsList";
import SectionHeader from "../components/SectionHeader";

function ProjectsPage() {
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

      <ProjectActionButtons />

      <ProjectCardsList />
    </div>
  );
}

export default ProjectsPage;
