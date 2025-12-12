import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Github, Upload, Youtube } from "lucide-react";
import Button from "./Button";
import Skill from "./Skill";
import toast from "react-hot-toast";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologiesUsed: string[];
  imageUrl: string;
  liveLink: string | undefined;
  gitHubLink: string | undefined;
  youtubeLink: string | undefined;
  isFinished: boolean;
  index: number;
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
  index,
}: ProjectCardProps) {
  const buttonsData = [
    { link: liveLink, variation: "orange", text: "Live", icon: Upload },
    { link: gitHubLink, variation: "gray", text: "Video", icon: Youtube },
    { link: youtubeLink, variation: "gray", text: "Code", icon: Github },
  ];

  // Calculate how many technologies used are there (other than the first 3 that are shown)
  const notDisplayedTechnologies = technologiesUsed.length - 3;
  const navigate = useNavigate();

  function handleClick() {
    if (isFinished) {
      navigate(`/project-details/${id}`);
    } else {
      toast.error(
        "This Project is not finished yet! Please visit later to view it"
      );
    }
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.2 * index,
        },
      }}
    >
      <motion.button
        whileHover={{
          y: -10,
          transition: { duration: 0.4, ease: "easeOut" },
        }}
        onClick={handleClick}
        className="rounded-2xl border border-(--border-color) bg-(--custom-bg-2) shadow-xl hover:border-(--orange-text) cursor-pointer focus:outline-none focus:border-(--orange-text) delay group overflow-hidden h-full flex flex-col"
      >
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={`Preview of project: ${title}`}
            className="object-cover w-full h-56 rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 group-hover:bg-black/30 delay z-20 rounded-t-2xl"></div>

          {!isFinished && (
            <div className="absolute inset-0 bg-black/45 flex items-center justify-center z-20 rounded-t-2xl">
              <div className="flex items-center gap-2 text-base px-5 py-3 rounded-lg text-white bg-orange-500 shadow-lg">
                <Clock size={20} />
                Coming Soon
              </div>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-xl text-start text-(--text-color) mb-3">
            {title}
          </h2>

          <p className="text-sm text-start text-(--gray-text) mb-5 line-clamp-3">
            {description}
          </p>

          {/* Technologies used in this project */}
          <div className="mt-auto">
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

              <li className="flex items-center justify-center text-xs px-3 py-1 bg-(--gray-bg) rounded-full text-(--gray-text)">
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
                    addedClasses={`justify-center text-sm px-3 py-2 grow ${
                      btn.variation === "gray" ? "border-2" : ""
                    }`}
                  >
                    <btn.icon size={16} />
                    {btn.text}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="justify-center text-sm px-3 py-2 w-full opacity-70 flex items-center gap-2 rounded-[0.625rem] text-(--text-color-secondary) border-(--border-color) bg-(--custom-bg-2) border-3">
                <Clock size={16} />
                Comming Soon
              </div>
            )}
          </div>
        </div>
      </motion.button>
    </motion.li>
  );
}

export default ProjectCard;
