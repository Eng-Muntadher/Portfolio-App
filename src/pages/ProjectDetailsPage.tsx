import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import type { ProjectButtonsDataType } from "../types/types";
import {
  AlertCircle,
  ExternalLink,
  Figma,
  Github,
  Target,
  Youtube,
} from "lucide-react";
import ProjectLinksButtons from "../components/ProjectLinksButtons";
import ProjectOverViewCard from "../components/ProjectOverViewCard";
import ProjectTechUsed from "../components/ProjectTechUsed";
import ProjectKeyFeatures from "../components/ProjectKeyFeatures";
import ProjectChallengesCard from "../components/ProjectChallengesCard";
import Breadcrumb from "../components/Breadcrumb";

function ProjectDetailsPage() {
  // Get the current project id from the URL
  const { id } = useParams<{ id: string }>();

  // This use effect resets the scroll of the page to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!id) return;

  // Get the specific project with this id
  const project = projects.filter((project) => project.id === +id).at(0);

  if (!project) return;

  const buttons: ProjectButtonsDataType[] = [
    {
      variation: "orange",
      icon: ExternalLink,
      text: "Live Demo",
      url: project?.liveLink,
    },
    {
      variation: "light",
      icon: Github,
      text: "Source Code",
      url: project?.gitHubLink,
    },
    {
      variation: "red",
      icon: Youtube,
      text: "Project On YouTube",
      url: project?.youtubeLink,
    },
    {
      variation: "dark",
      icon: Figma,
      text: "Figma Design",
      url: project?.figmaLink,
    },
  ];

  // Split the key features array into 2 columns for better display (handles odd numbers as well)
  const mid = Math.ceil(project.keyFeatures.length / 2);
  const left = project.keyFeatures.slice(0, mid);
  const right = project.keyFeatures.slice(mid);

  return (
    <div className="px-32 max-xl:px-0">
      {/* Back button */}
      <Breadcrumb
        text="Back To Projects"
        to="/projects"
        ariaLabel="Go back to projects page"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl text-(--text-color) mb-6">{project?.title}</h1>

        <p className="text-xl text-(--text-color-secondary) mb-8 leading-7">
          {project?.subTitle}
        </p>

        {/* Project image */}
        <div className="mb-12">
          <img
            src={project?.imageUrl}
            alt={`Image for the project ${project?.title}`}
            className="rounded-xl w-full h-auto md:h-168 md:object-cover md:object-center"
          />
        </div>

        {/* Live links, Figma links, ... */}
        <ProjectLinksButtons buttons={buttons} />

        <div className="grid grid-cols-[1fr_auto] gap-8 mb-8 max-lg:grid-cols-1">
          <ProjectOverViewCard description={project.description} />
          <ProjectTechUsed technologiesUsed={project.technologiesUsed} />
        </div>

        <ProjectKeyFeatures left={left} right={right} />

        {/* Additional project info */}
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
          <ProjectChallengesCard
            title="Challenges"
            ariaLabelledby="Challenges"
            text={project?.Challenges}
            icon={AlertCircle}
          />

          <ProjectChallengesCard
            title="Outcome"
            ariaLabelledby="Outcome"
            text={project?.outcome}
            icon={Target}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectDetailsPage;
