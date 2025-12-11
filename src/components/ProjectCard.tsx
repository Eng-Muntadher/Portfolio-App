import { useNavigate } from "react-router-dom";
import { Clock, Github, Upload, Youtube } from "lucide-react";
import Button from "./Button";
import Skill from "./Skill";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologiesUsed: string[];
  imageUrl: string;
  liveLink: string;
  gitHubLink: string;
  youtubeLink: string;
  isFinished: boolean;
}

function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  liveLink,
  gitHubLink,
  youtubeLink,
  technologiesUsed,
  isFinished,
}: ProjectCardProps) {
  const buttonsData = [
    { link: liveLink, variation: "orange", text: "Live", icon: Upload },
    { link: gitHubLink, variation: "gray", text: "Video", icon: Youtube },
    { link: youtubeLink, variation: "gray", text: "Code", icon: Github },
  ];

  // Calculate how many technologies used are there (other than the first 3 that are shown)
  const notDisplayedTechnologies = technologiesUsed.length - 3;
  const navigate = useNavigate();

  return (
    <li>
      <button
        onClick={() => navigate(`/projects?id=${id}`)}
        className="rounded-2xl border border-[#E5E7EB] bg-white shadow-xl"
      >
        <div className="relative">
          <img
            src={imageUrl}
            alt={`Preview of project: ${title}`}
            className="object-cover w-full h-56 rounded-t-2xl"
          />
          {!isFinished && (
            <div className="absolute inset-0 bg-black/45 flex items-center justify-center z-20 rounded-t-2xl">
              <div className="flex items-center gap-2 text-base px-5 py-3 rounded-lg text-white bg-orange-500 shadow-lg">
                <Clock size={20} />
                Coming Soon
              </div>
            </div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-xl text-start text-(--text-color) mb-3">
            {title}
          </h2>

          <p className="text-sm text-start text-(--nav-links-text) mb-5">
            {description}
          </p>

          {/* Technologies used in this project */}
          <ul className="flex gap-2 flex-wrap mb-4">
            {/* SHow only first 3 used technologies in the cart */}
            {technologiesUsed.slice(0, 3).map((tech) => (
              <Skill
                key={tech}
                skillName={tech}
                isUsedInProjectCard={true}
                addedClasses={isFinished ? "" : "opacity-65"}
              />
            ))}

            <li className="flex items-center justify-center text-xs px-3 py-1 bg-[#F3F4F6] rounded-full text-(--nav-links-text)">
              {/* Show how many other technologies are used other than what is shown */}
              +{notDisplayedTechnologies}
            </li>
          </ul>

          {/* Project action buttons */}
          {isFinished ? (
            <div className="flex gap-2 flex-wrap">
              {buttonsData.map((btn, i) => (
                <Button
                  key={i}
                  isLink={true}
                  to={btn.link}
                  variation={
                    btn.variation as "orange" | "gray" | "light" | "dark"
                  }
                  addedClasses="justify-center text-sm px-3 py-2 grow"
                >
                  <btn.icon size={16} />
                  {btn.text}
                </Button>
              ))}
            </div>
          ) : (
            <div className="justify-center text-sm px-3 py-2 w-full opacity-70 flex items-center gap-2 rounded-[0.625rem] text-(--text-color-secondary) border border-[#E5E7EB] bg-[#f9fafb]">
              <Clock size={16} />
              Comming Soon
            </div>
          )}
        </div>
      </button>
    </li>
  );
}

export default ProjectCard;
