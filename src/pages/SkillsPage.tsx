import { Circle, Stars } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import SkillCardsContainer from "../components/SkillCardsContainer";
import TechnicalNotes from "../components/TechnicalNotes";

const coreStrengths = [
  "Building responsive, accessible web applications",
  "Writing clean, maintainable, and scalable code",
  "Implementing modern design systems",
  "Optimizing performance and user experience",
  "Collaborating with cross-functional teams",
  "Quick learner with strong problem-solving skills",
];

const currentlyExploring = [
  "Advanced React patterns and architecture",
  "Server-side rendering with Next.js",
  "Advanced TypeScript techniques",
  "Building production-ready UI components with shadcn/ui",
  "Advanced Git workflows and version control strategies",
  "Fundamentals of automated testing",
];

function SkillsPage() {
  return (
    <div className="px-20 max-xl:px-8">
      <SectionHeader
        text="Technical"
        highlight="Skills"
        addedClasses="text-6xl mb-10 max-lg:text-5xl max-md:text-4xl"
      />

      <p className="text-(--nav-links-text) text-xl text-center mb-16">
        Technologies and expertise I bring to every project
      </p>

      <SkillCardsContainer />

      <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
        <TechnicalNotes
          highlight="Core"
          text="Strengths"
          headingId="core-strengths"
          icon={Circle}
          iconBg="#FF690033"
          iconColor="#FF6900"
          notesList={coreStrengths}
          iconFill={true}
        />
        <TechnicalNotes
          highlight="Currently"
          text="Exploring"
          headingId="currently-exploring"
          icon={Stars}
          iconBg="#2B7FFF33"
          iconColor="#2B7FFF"
          notesList={currentlyExploring}
        />
      </div>
    </div>
  );
}

export default SkillsPage;
