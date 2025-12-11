import { useLocation } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectCardsList() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const state = params.get("tech-used");

  let filteredProjects = projects;

  if (state === "react") {
    filteredProjects = projects.filter((project) =>
      project.technologiesUsed.includes("React")
    );
  } else if (state === "nextjs") {
    filteredProjects = projects.filter((project) =>
      project.technologiesUsed.includes("Next.js")
    );
  } else if (state === "javascript") {
    filteredProjects = projects.filter((project) =>
      project.technologiesUsed.includes("JavaScript")
    );
  }

  return (
    <ul className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          technologiesUsed={project.technologiesUsed}
          imageUrl={project.imageUrl}
          liveLink={project.liveLink}
          gitHubLink={project.gitHubLink}
          youtubeLink={project.youtubeLink}
          isFinished={project.isFinished}
        />
      ))}
    </ul>
  );
}

export default ProjectCardsList;
