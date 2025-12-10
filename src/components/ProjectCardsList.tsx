import ProjectCard from "./ProjectCard";

// @ts-ignore
import myImage from "../assets/myImage.JPG";
import { useLocation } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Student Managment System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos odit vitae id commodi totam perferendis dolore explicabo tempore minus iste placeat",
    technologiesUsed: [
      "React",
      "TypeScript",
      "Recharts",
      "Lucid Icons",
      "React Query",
      "Redux Tool Kit",
      "More",
    ],
    imageUrl: myImage,
    liveLink: "/",
    gitHubLink: "/",
    youtubeLink: "/",
    isFinished: true,
  },
  {
    id: 2,
    title: "Student Managment System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos odit vitae id commodi totam perferendis dolore explicabo tempore minus iste placeat",
    technologiesUsed: [
      "Next.js",
      "TypeScript",
      "Recharts",
      "Lucid Icons",
      "React Query",
      "Redux Tool Kit",
      "More",
    ],
    imageUrl: myImage,
    liveLink: "/",
    gitHubLink: "/",
    youtubeLink: "/",
    isFinished: false,
  },
  {
    id: 3,
    title: "Student Managment System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos odit vitae id commodi totam perferendis dolore explicabo tempore minus iste placeat",
    technologiesUsed: [
      "React",
      "TypeScript",
      "Recharts",
      "Lucid Icons",
      "React Query",
      "Redux Tool Kit",
      "More",
    ],
    imageUrl: myImage,
    liveLink: "/",
    gitHubLink: "/",
    youtubeLink: "/",
    isFinished: true,
  },
  {
    id: 4,
    title: "Student Managment System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos odit vitae id commodi totam perferendis dolore explicabo tempore minus iste placeat",
    technologiesUsed: [
      "React",
      "TypeScript",
      "Recharts",
      "Lucid Icons",
      "React Query",
      "Redux Tool Kit",
      "More",
    ],
    imageUrl: myImage,
    liveLink: "/",
    gitHubLink: "/",
    youtubeLink: "/",
    isFinished: true,
  },
  {
    id: 5,
    title: "Student Managment System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos odit vitae id commodi totam perferendis dolore explicabo tempore minus iste placeat",
    technologiesUsed: [
      "React",
      "TypeScript",
      "Recharts",
      "Lucid Icons",
      "React Query",
      "Redux Tool Kit",
      "More",
    ],
    imageUrl: myImage,
    liveLink: "/",
    gitHubLink: "/",
    youtubeLink: "/",
    isFinished: true,
  },
  {
    id: 6,
    title: "Student Managment System",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dignissimos odit vitae id commodi totam perferendis dolore explicabo tempore minus iste placeat",
    technologiesUsed: [
      "React",
      "TypeScript",
      "Recharts",
      "Lucid Icons",
      "React Query",
      "Redux Tool Kit",
      "More",
    ],
    imageUrl: myImage,
    liveLink: "/",
    gitHubLink: "/",
    youtubeLink: "/",
    isFinished: true,
  },
];

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
