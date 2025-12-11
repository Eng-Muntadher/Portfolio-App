import type { LucideIcon } from "lucide-react";
import Skill from "./Skill";

interface SkillCategoryCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  category: string;
  skills: string[];
}

function SkillCategoryCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  category,
  skills,
}: SkillCategoryCardProps) {
  return (
    <li className="p-6 rounded-xl border border-(--border-color) bg-(--custom-bg-2) shadow-lg min-h-[250px]">
      <div className="flex gap-4 items-center mb-6">
        <span
          style={{
            color: iconColor,
            backgroundColor: iconBgColor,
          }}
          className="block p-3 rounded-[0.875rem]"
        >
          <Icon aria-hidden="true" />
        </span>
        <h2 className="text-xl text-(--text-color) font-semibold">
          {category}
        </h2>
      </div>

      <ul className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <Skill key={skill} skillName={skill} />
        ))}
      </ul>
    </li>
  );
}

export default SkillCategoryCard;
