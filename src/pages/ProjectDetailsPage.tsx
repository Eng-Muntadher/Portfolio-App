import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AlertCircle,
  ExternalLink,
  Figma,
  Github,
  Target,
  Youtube,
} from "lucide-react";
import { projects } from "../data/projects";
import type { ProjectButtonsDataType } from "../types/types";
import ProjectLinksButtons from "../components/ProjectLinksButtons";
import ProjectOverViewCard from "../components/ProjectOverViewCard";
import ProjectTechUsed from "../components/ProjectTechUsed";
import ProjectKeyFeatures from "../components/ProjectKeyFeatures";
import ProjectChallengesCard from "../components/ProjectChallengesCard";
import Breadcrumb from "../components/Breadcrumb";

// @ts-ignore
import myImage from "../assets/myImage.JPG";

function ProjectDetailsPage() {
  const { id } = useParams<{ id: string }>();

  // This use effect resets the scroll of the page to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!id) return;

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

  // Split array into 2 columns (handles odd numbers as well)
  const mid = Math.ceil(project.keyFeatures.length / 2);
  const left = project.keyFeatures.slice(0, mid);
  const right = project.keyFeatures.slice(mid);

  return (
    <div className="px-52 max-xl:px-8">
      <Breadcrumb
        text="Back To Projects"
        to="/projects"
        ariaLabel="Go back to projects page"
      />

      <h1 className="text-6xl text-(--text-color) mb-6">{project?.title}</h1>

      <p className="text-xl text-(--text-color-secondary) mb-8 leading-7">
        {project?.subTitle}
      </p>

      <div className="mb-12">
        <img
          src={project?.imageUrl}
          alt={`Image for the project ${project?.title}`}
          className="rounded-xl h-168 w-full object-cover"
        />
      </div>

      <ProjectLinksButtons buttons={buttons} />

      <div className="grid grid-cols-[1fr_auto] gap-8 mb-8 max-lg:grid-cols-1">
        <ProjectOverViewCard description={project.description} />
        <ProjectTechUsed technologiesUsed={project.technologiesUsed} />
      </div>

      <ProjectKeyFeatures left={left} right={right} />

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
    </div>
  );
}

export default ProjectDetailsPage;
