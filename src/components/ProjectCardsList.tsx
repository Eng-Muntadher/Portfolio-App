import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function ProjectCardsList() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  // Get the current projects filter for technologies used
  const state = params.get("tech-used");

  let filteredProjects = projects;

  // Filter the projects based on usage of Vanilla JS, React or Next.js
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
    <motion.ul
      key={state || "all"} // This forces re-mount when filter changes (so that animation fires each time)
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1"
    >
      {filteredProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          index={index}
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
    </motion.ul>
  );
}

export default ProjectCardsList;
