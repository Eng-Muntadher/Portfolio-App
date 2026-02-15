"use client";

import { motion } from "framer-motion";
import { Clock, Github, Upload, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import toast from "react-hot-toast";

import Button from "./Button";
import Skill from "./Skill";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologiesUsed: string[];
  imageUrl: string | StaticImageData;
  liveLink?: string;
  gitHubLink?: string;
  youtubeLink?: string;
  isFinished: boolean;
  index: number;
}

export default function ProjectCard({
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
  const router = useRouter();

  const buttonsData = [
    { link: liveLink, variation: "orange", text: "Live", icon: Upload },
    { link: gitHubLink, variation: "gray", text: "Code", icon: Github },
    { link: youtubeLink, variation: "gray", text: "Video", icon: Youtube },
  ];

  const hiddenTechCount = Math.max(technologiesUsed.length - 3, 0);

  function handleCardClick() {
    if (!isFinished) {
      toast.dismiss();
      toast.error("This project is not finished yet. Please check back later.");
      return;
    }

    router.push(`/project-details/${id}`);
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.2 },
      }}
    >
      <motion.div
        role="button"
        tabIndex={0}
        onClick={handleCardClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleCardClick();
        }}
        whileHover={{ y: -10, transition: { duration: 0.4 } }}
        className="group h-full cursor-pointer overflow-hidden rounded-2xl border border-(--border-color) bg-(--custom-bg-2) shadow-xl focus:outline-none focus:border-(--orange-text) delay"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Preview of project: ${title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {!isFinished && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/45">
              <div className="flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-white shadow-lg">
                <Clock size={20} />
                Coming Soon
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <h2 className="mb-3 text-xl text-(--text-color)">{title}</h2>

          <p className="mb-5 line-clamp-3 text-sm text-(--gray-text)">
            {description}
          </p>

          <div className="mt-auto">
            {/* Technologies */}
            <ul className="mb-4 flex flex-wrap gap-2">
              {technologiesUsed.slice(0, 3).map((tech) => (
                <Skill
                  key={tech}
                  skillName={tech}
                  isUsedInProjectCard
                  addedClasses={!isFinished ? "opacity-65" : ""}
                />
              ))}

              {hiddenTechCount > 0 && (
                <li className="rounded-full bg-(--gray-bg) px-3 py-1 text-xs text-(--gray-text) delay">
                  +{hiddenTechCount}
                </li>
              )}
            </ul>

            {/* Actions */}
            {isFinished ? (
              <div className="flex flex-wrap gap-2">
                {buttonsData.map(
                  (btn, i) =>
                    btn.link && (
                      <Button
                        key={i}
                        variation={btn.variation as "orange" | "gray"}
                        addedClasses={`grow px-3 py-2 text-sm ${
                          btn.variation === "gray" ? "border-2" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(btn.link, "_blank");
                        }}
                      >
                        <btn.icon size={16} />
                        {btn.text}
                      </Button>
                    ),
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2 rounded-lg border border-(--border-color) bg-(--custom-bg-2) px-3 py-2 text-sm text-(--text-color-secondary) opacity-70">
                <Clock size={16} />
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
}
