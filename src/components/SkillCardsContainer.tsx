import {
  CheckCircle2Icon,
  Code2,
  Database,
  Palette,
  Stars,
  Wrench,
} from "lucide-react";
import SkillCategoryCard from "./SkillCategoryCard";

const skillsInfo = [
  {
    icon: Code2,
    iconColor: "#FF6B6B",
    iconBgColor: "#FF6B6B20",
    category: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "React Router",
    ],
  },
  {
    icon: Palette,
    iconColor: "#4ECDC4",
    iconBgColor: "#4ECDC420",
    category: "Styling & Design",
    skills: [
      "Tailwind CSS",
      "CSS Modules",
      "Styled Components",
      "Responsive Design",
    ],
  },
  {
    icon: Database,
    iconColor: "#95E1D3",
    iconBgColor: "#95E1D320",
    category: "State & Data Management",
    skills: [
      "Redux Toolkit",
      "Context API",
      "React Query",
      "Supabase",
      "SQL",
      "REST APIs",
    ],
  },
  {
    icon: Wrench,
    iconColor: "#FFE66D",
    iconBgColor: "#FFE66D20",
    category: "Tools & Workflow",
    skills: ["Git & GitHub", "Vite", "VS Code", "Figma", "Chrome DevTools"],
  },
  {
    icon: Stars,
    iconColor: "#A8E6CF",
    iconBgColor: "#A8E6CF20",
    category: "Libraries & Frameworks",
    skills: [
      "Framer Motion",
      "React Hook Form",
      "Recharts",
      "React Hot Toast",
      "Day.js",
      "React Dropzone",
      "React Error Boundary",
      "React Icons",
      "Lucid Icons",
    ],
  },
  {
    icon: CheckCircle2Icon,
    iconColor: "#FFB6B9",
    iconBgColor: "#FFB6B920",
    category: "Best Practices",
    skills: [
      "Clean Code",
      "Performance Optimization",
      "Web Accessibility (a11y)",
      "SEO Best Practices",
    ],
  },
];

function SkillCardsContainer() {
  return (
    <ul className="grid grid-cols-3 gap-6 mb-16 max-lg:grid-cols-2 max-md:grid-cols-1">
      {skillsInfo.map((skill) => (
        <SkillCategoryCard
          key={skill.category}
          icon={skill.icon}
          iconColor={skill.iconColor}
          iconBgColor={skill.iconBgColor}
          category={skill.category}
          skills={skill.skills}
        />
      ))}
    </ul>
  );
}

export default SkillCardsContainer;
